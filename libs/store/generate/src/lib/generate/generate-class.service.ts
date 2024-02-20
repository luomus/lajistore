import { Injectable } from '@nestjs/common';
import { compile } from 'json-schema-to-typescript';
import { JSONSchema4 } from 'json-schema';
import { AbstractSchemaGenerateService } from './abstract-schema-generate.service';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, UtilityService } from '@luomus/store/shared';

@Injectable()
export class GenerateClassService extends AbstractSchemaGenerateService {
  classPath = this.configService.get('CLASSES_PATH');
  classFilePattern = this.configService.get('CLASSES_FILENAME_PATTERN');
  classIndexContent = '';

  constructor(configService: StoreConfigService, fileService: FileService) {
    super(configService, fileService);
  }

  /**
   * Generate typescript classes that match the schema
   * @param classes
   */
  async generate(classes?: string[]): Promise<boolean> {
    await super.generate(classes);
    return this.writeToFile(
      'index',
      this.classIndexContent,
      this.classPath,
      this.classFilePattern
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

    let tsInterface = await compile(schema, normalized, {
      unknownAny: true,
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

    this.classIndexContent += `export { ${normalized} } from './${fileName}'\n`;
  
    tsInterface = tsInterface.replace('interface', 'class');

    return this.writeToFile(
      normalized,
      tsInterface,
      this.classPath,
      this.classFilePattern
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