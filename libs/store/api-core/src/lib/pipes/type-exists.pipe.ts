import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { JsonSchemaService } from '@luomus/store/shared';

@Injectable()
export class TypeExistsPipe implements PipeTransform {
  constructor(private jsonSchemaService: JsonSchemaService) {}

  /**
   * Make sure that the schema with specific type exists
   * and throw an error if it doesn't
   *
   * @throws NotFoundException
   * @param type
   * @param metadata
   */
  async transform(type: string, metadata: ArgumentMetadata): Promise<string> {
    try {
      await this.jsonSchemaService.getSchema(type);
    } catch (e) {
      throw new NotFoundException(`Type '${type}' not found`);
    }
    return type;
  }
}
