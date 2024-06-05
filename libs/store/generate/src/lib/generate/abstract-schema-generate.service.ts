import { AbstractGenerateService } from './abstract-generate.service';
import { map } from 'rxjs/operators';
import { JSONSchema4 } from 'json-schema';

export abstract class AbstractSchemaGenerateService extends AbstractGenerateService {
  /**
   * Loop through all schemas and pass each schema to generateFromJsonSchema method
   *
   * @param classes
   */
  async generate(classes?: string[]): Promise<boolean> {
    if (!classes) {
      classes = await this.fileService
        .listFiles(this.configService.get('JSON_SCHEMA_PATH'))
        .pipe(
          map((filenames) =>
            filenames.map((filename) => filename.split('.')[0])
          )
        )
        .toPromise();
    }
    let result = true;
    for (const className of classes) {
      try {
        await this.generateFromJsonSchema(
          className,
          await this.fileService
            .readJsonFile<JSONSchema4>(this.fileService.getFilename(className))
            .toPromise()
        );
      } catch (e) {
        console.error(e);
        result = false;
      }
    }
    return result;
  }

  protected abstract generateFromJsonSchema(
    name: string,
    schema: JSONSchema4
  ): Promise<boolean>;
}
