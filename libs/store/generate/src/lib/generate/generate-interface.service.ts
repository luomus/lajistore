import { Injectable } from '@nestjs/common';
import { compile } from 'json-schema-to-typescript';
import { JSONSchema4 } from 'json-schema';
import { AbstractSchemaGenerateService } from './abstract-schema-generate.service';
import { StoreObject } from '@luomus/shared/models';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, UtilityService } from '@luomus/store/shared';

@Injectable()
export class GenerateInterfaceService extends AbstractSchemaGenerateService {
  typeProperty: keyof Pick<StoreObject, '@type'> = '@type'
  modelPath = this.configService.get('MODELS_PATH');
  modelFilePattern = this.configService.get('MODELS_FILENAME_PATTERN');
  languages: string[] = [];
  modelIndexContent = `export * from './list-response';`;
  isOfType = '';
  models: string[] = [];

  constructor(configService: StoreConfigService, fileService: FileService) {
    super(configService, fileService);
  }

  /**
   * Generate typescript interfaces that match the schema
   *
   * @param classes
   */
  async generate(classes?: string[]): Promise<boolean> {
    await super.generate(classes);
    this.languages = await this.fileService
      .readJsonFile<string[]>(this.configService.get('CONFIG_LANGUAGES_FILE'))
      .toPromise();

    this.modelIndexContent += `

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
    this.modelIndexContent += this.isOfType;

    return this.writeToFile(
      'index',
      this.modelIndexContent,
      this.modelPath,
      this.modelFilePattern
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

    this.prepareSchemaTitles(schema);

    const tsInterface = await compile(schema, normalized, {
      strictIndexSignatures: true,
      ignoreMinAndMaxItems: false,
      bannerComment:
        '/* tslint:disable */\n' +
        '/**\n' +
        '* This file was automatically generated.\n' +
        '* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n' +
        '* and run the command to regenerate this file.\n' +
        '*/',
    });

    this.modelIndexContent += `\nimport { ${normalized} } from './${fileName}'`;
    this.modelIndexContent += `\nexport type { ${normalized} }`;

    this.isOfType += `
export function is${normalized}(data: unknown): data is ${normalized} {
  return !!(
    data && typeof data === 'object' && '${this.typeProperty}' in data && (data as StoreObject)['${this.typeProperty}'] === '${type}'
  );
}`

    this.models.push(normalized);

    return this.writeToFile(
      normalized,
      tsInterface,
      this.modelPath,
      this.modelFilePattern
    );
  }

  private prepareSchemaTitles(schema?: JSONSchema4) {
    if (!schema) {
      return;
    }
    if (schema.title) {
      delete schema.title;
    }
    if (schema.properties) {
      Object.keys(schema.properties).forEach((property) =>
        this.prepareSchemaTitles(schema.properties?.[property])
      );
    }
    if (schema.items) {
      this.prepareSchemaTitles(schema.items);
    }
  }
}
