import { Injectable } from '@nestjs/common';
import { AbstractGenerateService } from './abstract-generate.service';
import { LajiApiService, PropertyData, ClassData, AltData, Alt } from '@luomus/laji/client';
import { JSONSchema4 } from 'json-schema';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, UtilityService } from '@luomus/store/shared';
import { PROPERTY_CONTEXT, PROPERTY_ID, PROPERTY_TYPE } from '@luomus/store/interface';
import { lastValueFrom } from 'rxjs';

const MAX_NESTED_DEPTH = 7;

// For the time being we need to override embeddedOverride value on some of the properties
// format is: {<field>: <range>}
const embeddedOverride: Record<string, string> = {'MHLA.fields': 'MHLA.field'};

@Injectable()
export class GenerateJsonSchemaService extends AbstractGenerateService {
  private formatMap: Record<string, JSONSchema4> = {};
  private blackList: string[] = [];
  private languages: string[] = [];
  private written = new Set<string>();
  private addGeneratedFieldsToType: string[];
  private classData: ClassData[] = [];
  private propertyData: PropertyData[] = [];
  private altData: AltData = {};

  constructor(
    configService: StoreConfigService,
    fileService: FileService,
    private LajiApiService: LajiApiService,
  ) {
    super(configService, fileService);
    this.addGeneratedFieldsToType = this.configService.getList('ADD_GENERATED_FIELDS_FOR_EMBEDDED_TYPES');
    this.addGeneratedFieldsToType = this.addGeneratedFieldsToType.concat(this.configService.getList('ADD_GENERATED_FIELDS_WITH_SECONDARY_SEQ_FOR_EMBEDDED_TYPES'))
  }

  /**
   * Generate json-schemas from laji graphql api
   * @param classes
   */
  public async generate(classes?: string[]): Promise<boolean> {
    this.formatMap = await lastValueFrom(this.fileService
      .readJsonFile<Record<string, JSONSchema4>>(
        this.configService.get('CONFIG_RDF_TO_SCHEMA_TYPE_MAP')
      ));
    this.languages = await lastValueFrom(this.fileService
      .readJsonFile<string[]>(this.configService.get('CONFIG_LANGUAGES_FILE')));
    this.blackList = await lastValueFrom(this.fileService
      .readJsonFile<string[]>(
        this.configService.get('CONFIG_BLACKLIST_CLASS_FILE')
      ));
    let result = true;

    this.classData = await lastValueFrom(this.LajiApiService.getAllClasses());
    this.propertyData = await lastValueFrom(this.LajiApiService.getProperties());
    this.altData = await lastValueFrom(this.LajiApiService.getAlts());

    if (!classes) {
      classes = this.classData.map(c => c.class);
    }

    classes.sort((a, b) => a.localeCompare(b));
    for (const className of classes) {
      if (!(await this.generateClassSchema(className))) {
        result = false;
      }
    }

    return result;
  }

  private prepareClassData(className: string) {
    const propertyData = this.propertyData.filter(p => p.domain?.includes(className)).map(p => ({ ...p, alts: p.range ? this.altData[p.range] : undefined }));
    const classData = { ...(this.classData.find(c => c.class === className) || {}), properties: propertyData };
    return classData;
  }

  private async generateClassSchema(
    className: string,
    depth = 0
  ): Promise<false | JSONSchema4> {
    const schema: JSONSchema4 = {
      type: 'object',
      subject: className,
      additionalProperties: false,
    };
    const properties: Record<string, JSONSchema4> = {};
    const required: string[] = [];
    const classData = this.prepareClassData(className);

    const normalizedClassName = UtilityService.normalize(className);

    if (depth >= MAX_NESTED_DEPTH) {
      return schema;
    }

    if (!classData) {
      console.error(new Date().toISOString(), `Data for the class '${className}' was not found`);
      return false;
    }

    schema.title = classData.label || '';
    schema.description = classData.comment?.en || classData.comment?.fi || classData.comment?.sv || '';

    if (depth === 0 || this.addGeneratedFieldsToType.includes(className)) {
      // Add id property to all classes
      properties[PROPERTY_ID] = await this.generateBasicPropertySchema(
        PROPERTY_ID,
        `Id for the ${schema['title'] || className}`,
        required,
        depth
      );

      // Add type property to all classes
      properties[PROPERTY_TYPE] = await this.generateBasicPropertySchema(
        PROPERTY_TYPE,
        `Type for the ${schema['title'] || className}`,
        required,
        depth
      );

      // Add context property to all classes
      properties[PROPERTY_CONTEXT] = await this.generateBasicPropertySchema(
        PROPERTY_CONTEXT,
        `Context for the ${ schema['title'] || className }`,
        required,
        depth
      );
    }

    for (const property of classData.properties) {
      if (!property?.range || property.range === 'rdf:Resource') {
        continue;
      }
      const propertySchema = await this.generatePropertySchema(
        property.range,
        property,
        required,
        depth
      );
      if (!propertySchema) {
        console.error(
          new Date().toISOString(),
          `Data for the property class '${property.range[0]}' was not found`
        );
        return false;
      }
      properties[property.shortName] = propertySchema;
    }

    schema['properties'] = properties;
    if (required.length) {
      schema['required'] = required;
    }

    if (!this.blackList.includes(className) && depth === 0) {
      if (this.written.has(normalizedClassName)) {
        throw new Error(`\n\nAmbiguous normalized classname for class ${normalizedClassName}!\n\n`)
      }

      this.written.add(normalizedClassName);
      await this.writeToFile(
        className,
        JSON.stringify(
          {
            $schema: 'http://json-schema.org/schema#',
            ...schema,
            properties: {
              [PROPERTY_CONTEXT]: await this.generatePropertySchema(
                'xsd:string',
                {
                  property: PROPERTY_CONTEXT,
                  shortName: PROPERTY_CONTEXT,
                  minOccurs: 0,
                  label: `Context for the ${schema['title'] || className}`,
                },
                required,
                depth
              ),
              ...schema.properties,
            },
          },
          undefined,
          2
        ),
        this.configService.get('JSON_SCHEMA_PATH'),
        this.configService.get('JSON_FILENAME_PATTERN')
      );
    }

    return schema;
  }

  private async generateBasicPropertySchema(
    contextProperty: string,
    label: string,
    required: string[],
    depth: number
  ): Promise<JSONSchema4> {
    return (await this.generatePropertySchema(
      'xsd:string',
      {
        property: contextProperty,
        shortName: contextProperty,
        minOccurs: 0,
        label
      },
      required,
      depth
    )) as JSONSchema4;
  }

  private async generatePropertySchema(
    range: string,
    property: PropertyData,
    required: string[],
    depth: number
  ): Promise<JSONSchema4 | false> {
    let propSchema: JSONSchema4 = { type: 'string' };

    if (property.required) {
      required.push(property.shortName);
    }

    if (embeddedOverride[property.property]) {
      property.isEmbeddable = true;
      property.range = embeddedOverride[property.property];
      range = embeddedOverride[property.property];
    }
    if (this.formatMap[range]) {
      propSchema = { ...this.formatMap[range] };
    } else if (property.isEmbeddable) {
      const embedded = await this.generateClassSchema(range, depth + 1);
      if (embedded === false) {
        return false;
      }
      propSchema = { ...embedded };
    } else if (property?.alts?.length) {
      const enums: string[] = property.required ? [] : [''];
      const names: string[] = property.required ? [] : [''];
      property.alts.forEach((alt) => {
          enums.push(alt.id);
          names.push(alt.value || alt.id);
      });
      if (enums.length) {
        propSchema.enum = enums;
        propSchema.enumNames = names;
      }
    }

    if (property.hasMany) {
      propSchema = {
        type: 'array',
        uniqueItems: false,
        items: { ...propSchema },
      };
      if (property.minOccurs) {
        propSchema.minItems = +property.minOccurs;
      }
    }

    if (property.multiLanguage) {
      propSchema = {
        type: 'object',
        additionalProperties: false,
        properties: this.languages.reduce(
          (result: Record<string, JSONSchema4>, lang) => {
            result[lang] = { ...propSchema };

            return result;
          },
          {}
        ),
      };
      if (property.required) {
        propSchema['minProperties'] = 1;
      }
    }

    propSchema.range = range;
    propSchema.subject = property.property;

    const comment = property.comment?.en || property.comment?.fi || property.comment?.sv;
    if (comment) {
      propSchema.description = comment;
    }

    const title = property.label || property.shortName || property.property;
    if (title) {
      propSchema.title = title;
    }

    propSchema.sortOrder = property.sortOrder;
    return { ...propSchema };
  }
}
