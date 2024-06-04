import { Injectable } from '@nestjs/common';
import { compile } from 'json-schema-to-typescript';
import { JSONSchema4 } from 'json-schema';
import { AbstractSchemaGenerateService } from './abstract-schema-generate.service';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, UtilityService } from '@luomus/store/shared';
import { StoreObject } from '@luomus/shared/models';
import { map } from 'rxjs/operators';

@Injectable()
export class GenerateInterfaceOrClassService extends AbstractSchemaGenerateService {
  typeProperty: keyof Pick<StoreObject, '@type'> = '@type'
  classPath = this.configService.get('CLASSES_PATH');
  classFilePattern = this.configService.get('CLASSES_FILENAME_PATTERN');
  modelPath = this.configService.get('MODELS_PATH');
  modelFilePattern = this.configService.get('MODELS_FILENAME_PATTERN');
  languages: string[] = [];
  indexContent = '';
  isOfType = '';
  models: string[] = [];
  classes: string[] = [];
  blackList: string[] = [];
  type: 'class' | 'interface' = 'interface';

  constructor(configService: StoreConfigService, fileService: FileService) {
    super(configService, fileService);
  }

  /**
   * Generate typescript classesand interfaces that match the schema
   * @param classes
   */
  async generateClass(classes?: string[]) {
    this.type = 'class';
    return await this.generate(classes);
  }

  /**
   * Generate typescript classesand interfaces that match the schema
   * @param classes
   */
  async generateInterface(models?: string[]) {
    this.type = 'interface';
    return await this.generate(models);
  }

  /**
   * Generate typescript classes and interfaces that match the schema
   * @param classes
   */
  async generate(classes?: string[]): Promise<boolean> {
    if (!classes) {
      this.classes = await this.fileService
        .listFiles(this.configService.get('JSON_SCHEMA_PATH'))
        .pipe(
          map((filenames) =>
            filenames.map((filename) => filename.split('.')[0])
          )
        )
        .toPromise();
    }

    this.blackList = await this.fileService
      .readJsonFile<string[]>(
        this.configService.get('CONFIG_BLACKLIST_CLASS_FILE')
      )
      .toPromise();

    await super.generate(this.classes);

    if (this.type === 'interface') {
      this.languages = await this.fileService
      .readJsonFile<string[]>(this.configService.get('CONFIG_LANGUAGES_FILE'))
      .toPromise();

      this.indexContent += `

export type StoreObject = ${this.models.join('\n   | ')};

export type KeyOfUnion<K extends StoreObject> = K extends keyof K ? K : never;

export type Lang = '${this.languages.join('\' | \'')}';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && ['${this.languages.join('\', \'')}'].includes(value);
}

export function isLangObject<T>(value: unknown): value is Record<Lang, T> {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return Object.keys(value || {}).every((lang) => isLang(lang));
  }
  return false;
}
`;
      this.indexContent += this.isOfType;
    }

    return this.writeToFile(
      'index',
      this.indexContent,
      this.type === 'interface' ? this.modelPath : this.classPath,
      this.type === 'interface' ? this.modelFilePattern : this.classFilePattern
    );
  }

  protected async generateFromJsonSchema(
    name: string,
    schema: JSONSchema4
  ): Promise<boolean> {
    const type = schema.subject || name;
    const normalized = UtilityService.normalize(type, true);
    const fileName = this.fileService.getFilename(
      normalized,
      '.',
      FileService.REPLACE_NAME
    );

    const imports: string[] = [];
    const enumsAndObjects: Record<string, any> = {};

    this.prepareSchemaTitlesAndEnumsAndObjects(name, enumsAndObjects, schema);
    const tsInterface = await compile(schema, normalized, {
      unknownAny: true,
      strictIndexSignatures: true,
      ignoreMinAndMaxItems: false,
    });

    let outputTS = '/* tslint:disable */\n' +
    '/*\n' +
    '* This file was automatically generated.\n' +
    '* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n' +
    '* and run the command to regenerate this file.\n' +
    '*/\n';

    if (this.type === 'interface') {
      this.indexContent += `\nimport { ${normalized} } from './${fileName}'`;
      this.indexContent += `\nexport type { ${normalized} }`;

      this.isOfType += `
export function is${normalized}(data: unknown): data is ${normalized} {
  return !!(
    data && typeof data === 'object' && '${this.typeProperty}' in data && (data as StoreObject)['${this.typeProperty}'] === '${type}'
  );
}`

      this.models.push(normalized);
    } else {
      this.indexContent += `\nexport { ${normalized} } from './${fileName}'`;
    }

    let ownInterface = this.getOwnInterface(normalized, tsInterface);
    const ownTypings = this.getInterfaceTypes(ownInterface)
      .map(type => type.trim())
      .map(type => {
        return {
          original: type,
          property: (/^"?[\w:@]+\b"?/.exec(type)?.[0] || '').trim(),
          type: (/\s[A-Z][\w]+/.exec(type)?.[0] || '').trim()
        }
      })

    let enumsAndAdditionalClasses = '';

    ownTypings.forEach(type => {
      const props = enumsAndObjects[type.property];
      const newTyping = this.getInerfaceOrEnumRef(type.property, enumsAndObjects);
      
      if (!newTyping) return;

      const description = props.description;
      const replacer = ( description ?
        '/**\n' +
        '   * ' + description + '\n' +
        '   */\n  ' : '' ) +
        type.original.replace(type.type, newTyping);

      ownInterface = ownInterface.replace(type.original, replacer);

      const normalizedRange = UtilityService.normalize(props.range, true)
      if (
        !(new RegExp(`^${normalized}\\d+$`).test(type.type)) &&
        this.classes.find(schema => UtilityService.normalize(schema, true) === normalizedRange)
      ) {
        if (!imports.includes(normalizedRange)) imports.push(normalizedRange);
      } else if (props.isEnum) {
        enumsAndAdditionalClasses += this.parseEnum(type.type, props.enum);
      } else {
        enumsAndAdditionalClasses += this.extractInterface(type.type, tsInterface);
      }
    })

    if (imports.length) {
      outputTS = imports.map(interfaceName => `import { ${interfaceName } } from './';\n`).join('') + outputTS;
    }


    outputTS += enumsAndAdditionalClasses;
    outputTS += ownInterface;

    if (this.type === 'class') {
      outputTS = outputTS.replace(/ interface /gm, ' class ');
    }
 
    return this.writeToFile(
      normalized,
      outputTS,
      this.type === 'interface' ? this.modelPath : this.classPath,
      this.type === 'interface' ? this.modelFilePattern : this.classFilePattern
    );
  }

  private getInerfaceOrEnumRef(property: string, classesAndEnums: Record<string, any>) {
    const props = classesAndEnums[property];
    const normalized = UtilityService.normalize(props.range, true);

    if (!props) return;

    if (props.isArray) {
      return props.minItems ? `[${(normalized + ', ').repeat(props.minItems)}...${normalized}[]]` : `${normalized}[]`;
    }

    return normalized;
  }

  private parseEnum(normalized: string, enums: string[]) {
    if (this.type === 'interface') {
      return `export type ${normalized} =\n  | "${enums.join('"\n  | "')}";\n`
    }

    enums = enums.map(enumVal => {      
      let enumKey = enumVal;

      if (!(enumVal.startsWith('MX.') || enumVal.startsWith('MVL.'))) {
        const prefixLocation = enumVal.indexOf('.');
        enumKey = enumVal.substring(prefixLocation + 1);
      }

      if (!enumVal) {
        enumKey = 'empty';
      }

      return `  "${enumKey}" = "${enumVal}"`});
    return `export enum ${normalized} {\n${enums.join(',\n')}\n}\n`;
  }

  private getOwnInterface(normalizedClass: string, target: string) {
    return new RegExp(`export interface ${normalizedClass} {(\\n(\\s+.+\\n)*)?}\n?`, 'gm').exec(target)?.[0] || '';
  }

  private getInterfaceTypes(classString: string) {
    return classString.match(new RegExp('^\\s+"?[\\w:@]+"?\\??: [A-Z].+(\\[\\])?(?<!undefined);', 'gm')) || [];
  }

  private extractInterface(className: string, tsString: string) {
    return (new RegExp(`export interface ${className}\\d* {(\\n(\\s+.+\\n)*)?}`, 'gm').exec(tsString)?.[0] || '').replace(new RegExp(`${className}\\d+`, 'g'), className);
  }

  private prepareSchemaTitlesAndEnumsAndObjects(parent = 'root', enumsAndObjects: Record<string, any>, schema?: JSONSchema4) {
    if (!schema) {
      return;
    }

    if (schema.title) {
      if (
        !this.blackList.includes(schema.range) && (
        (
          schema.type === 'object' &&
          !Object.keys(schema.properties || {}).every(elem => ['en', 'fi', 'sv'].includes(elem))
        ) || 
        schema.enum || 
        (
          schema.type === 'array' && schema.range && schema.range !== 'xsd:string' && (
            (schema.items as JSONSchema4)?.enum || (schema.items as JSONSchema4).type === 'object'
          )
        ))
      ) {
        schema.title = UtilityService.normalize(schema.range || schema.subject, true);

        enumsAndObjects[parent] = {
          minItems: schema.minItems,
          isArray: schema.type === 'array',
          isEnum: schema.type ==='array' ? !!(schema.items as JSONSchema4)?.enum : !!schema.enum,
          range: (schema.items as JSONSchema4)?.range || schema.range,
          enum: (schema.items as JSONSchema4)?.enum || schema.enum,
          description: schema.description,
        };

      } else {
        delete schema.title;
      }
    }

    if (schema.properties) {
      Object.keys(schema.properties).forEach((property) => {
        this.prepareSchemaTitlesAndEnumsAndObjects(property, enumsAndObjects, schema.properties?.[property])}
      );
    }
    if (schema.items) {
      const itemEnumsAndObjects = {};
      this.prepareSchemaTitlesAndEnumsAndObjects(parent, itemEnumsAndObjects, schema.items);

      if ((schema.items as JSONSchema4)?.type === 'object' && enumsAndObjects[parent]) {
        enumsAndObjects[parent].items = itemEnumsAndObjects;
      }
    }
  }
}
