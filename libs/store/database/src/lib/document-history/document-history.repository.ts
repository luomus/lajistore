import { Connection, FindManyOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { DocumentHistory } from './document-history.entity';
import { Where } from '../utility/utility-public';
import { toDbWhere } from '../utility/utility-private';
import { Document } from '../document/document.entity';

@Injectable()
export class DocumentHistoryRepository {
  constructor(
    private connection: Connection
  ) {}

  find(where: Where<DocumentHistory>, metaOnly: true): Promise<Required<Pick<DocumentHistory, 'id'|'version'|'edited'|'created'>[]>>;
  find(where: Where<DocumentHistory>, metaOnly?: false): Promise<Required<DocumentHistory>[]>;
  find(where: Where<DocumentHistory>, metaOnly: boolean): Promise<Required<Array<DocumentHistory|Pick<DocumentHistory, 'id'|'version'|'edited'|'created'>>>>;
  find(where: Where<DocumentHistory>, metaOnly = false) {
    const options: FindManyOptions = { where: toDbWhere(where), order: {'version': 'ASC'} };

    if (metaOnly) {
      options.select = ['id', 'version', 'edited', 'created'];
    }

    return this.connection.getRepository(DocumentHistory).find(options);
  }

  findDeleted(options: {
    skip?: number,
    take?: number,
    source?: string,
    type?: string,
    id?: string[]
  } = {} ): Promise<Required<Pick<DocumentHistory, 'id'|'source'|'type'>>[]> {
    const {skip, take, id, type, source} = options;
    const query = this.connection.getRepository(DocumentHistory)
      .createQueryBuilder('history')
      .select(['history.id', 'history.source', 'history.type', 'history.version'])
      .leftJoinAndSelect(qb => qb
        .select(['id', 'source'])
        .from(Document, 'document'),
        'document',
        'history.id = "document".id AND history.SOURCE = "document".SOURCE'
      )
      .where('"document".id is null AND "history".version = 1')
      .skip(skip ?? 0)
      .take(take ?? 100);

    if (id) {
      query.andWhere(`"history".id IN (:...id)`, {id});
    }
    if (type) {
      query.andWhere(`"history".type = :type`, {type});
    }
    if (source) {
      query.andWhere(`"history".source = :source`, {source});
    }

    return query.getMany() as any;
  }
}
