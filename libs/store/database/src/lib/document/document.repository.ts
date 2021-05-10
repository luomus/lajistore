import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Document } from './document.entity';
import { AffectedResponse } from '@luomus/store/interface';
import { Where } from '../utility/utility-public';
import { toDbWhere } from '../utility/utility-private';

const chuckSize = 1000;

export interface FindManyDocumentOptions {
  where: Where<Document>;
  skip?: number;
  take?: number;
  select?: Array<keyof Document>;
}

@Injectable()
export class DocumentRepository {
  constructor(
    private connection: Connection
  ) {}


  find(where: Where<Document>, metaOnly: true): Promise<Required<Pick<Document, 'id'|'version'|'edited'|'created'|'sequence'>[]>>;
  find(where: Where<Document>, metaOnly?: false): Promise<Required<Document>[]>;
  find(where: Where<Document>, metaOnly: boolean): Promise<Required<Array<Document|Pick<Document, 'id'|'version'|'edited'|'created'|'sequence'>>>>;
  find(where: Where<Document>, metaOnly = false) {
    const huge = new Set<keyof Where<Document>>();

    (Object.keys(where) as Array<keyof Where<Document>>).forEach(key => {
      const value = where[key];
      if (Array.isArray(value) && value.length > chuckSize) {
        huge.add(key);
      }
    })

    if (huge.size === 0) {
      return this._find(where, metaOnly);
    } else if (huge.size > 1) {
      throw new Error(`Cannot search for more than one items that have more than ${chuckSize} elements`)
    }
    const key = huge.values().next().value as keyof Where<Document>

    return this._findHuge(
      where,
      metaOnly,
      key,
      where[key] as Array<any>
    )
  }

  private async _findHuge<K extends keyof Document, V extends Document[K]>(
    where: Where<Document>,
    metaOnly: boolean,
    key: K,
    values: V[]
  ) {
    const result: Required<Array<Document|Pick<Document, 'id'|'version'|'edited'|'created'|'sequence'>>> = [];
    let chunk: V[] = [];
    let cnt = 0;

    for (const value of values) {
      cnt++;
      chunk.push(value);
      if (cnt >= chuckSize) {
        result.push(...await this._find({...where, [key]: chunk}, metaOnly));
        chunk = [];
        cnt = 0;
      }
    }
    if (cnt > 0) {
      result.push(...await this._find({...where, [key]: chunk}, metaOnly));
    }

    return result;
  }

  private _find(where: Where<Document>, metaOnly = false) {
    const options: FindManyDocumentOptions = { where };

    if (metaOnly) {
      options.select = ['id', 'version', 'edited', 'created', 'sequence'];
    }

    return this.findAll(options);
  }

  findAll(options: FindManyDocumentOptions): Promise<Required<Document>[]> {
    return this.connection.getRepository(Document).find({...options, where: toDbWhere(options.where)}) as any;
  }

  count(options: FindManyDocumentOptions) {
    return this.connection.getRepository(Document).count({where: toDbWhere(options.where)});
  }

  async deleteById(
    condition: Required<Pick<Document, 'id' | 'source' | 'type'>>,
    inTransaction: () => Promise<void> = () =>
      new Promise((resolve) => resolve()),
    onTransactionError: (err: any) => Promise<void> = () =>
      new Promise((resolve) => resolve())
  ): Promise<AffectedResponse> {
    const queryRunner = this.connection.createQueryRunner();
    let affected: number | null = 1;

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const dbResult = await queryRunner.manager.delete(Document, condition);
      await inTransaction();
      await queryRunner.commitTransaction();
      affected = dbResult.affected ?? 0;
    } catch (err) {
      console.log('ROLL BACK!!', err);
      await onTransactionError(err);
      await queryRunner.rollbackTransaction();
      affected = null;
    } finally {
      await queryRunner.release();
    }

    return { affected };
  }

  async createOrUpdateDocument(
    documents: Required<Document>[],
    inTransaction: (documents: Required<Document>[]) => Promise<void> = () =>
      new Promise((resolve) => resolve()),
    onTransactionError: (err: any) => Promise<void> = () =>
      new Promise((resolve) => resolve())
  ): Promise<boolean> {
    const queryRunner = this.connection.createQueryRunner();
    let success = true;
    let cnt = 0;
    let chunk: Required<Document>[] = [];

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      console.log('SAVING DOCUMENT:', documents.length);
      console.time('documents ' + documents.length)

      for (const document of documents) {
        cnt++;
        chunk.push(document);
        if (cnt >= 200) {
          await queryRunner.manager.save(chunk);
          cnt = 0;
          chunk = [];
        }
      }
      if (cnt > 0) {
        await queryRunner.manager.save(chunk);
      }
      console.timeEnd('documents ' + documents.length)
      console.time('inTransaction')
      await inTransaction(documents);
      console.timeEnd('inTransaction')
      console.time('commit')
      await queryRunner.commitTransaction();
      console.timeEnd('commit')
    } catch (err) {
      console.log('ROLL BACK!!', err);
      await onTransactionError(err);
      await queryRunner.rollbackTransaction();
      success = false;
    } finally {
      await queryRunner.release();
    }
    return success;
  }

  async getNextVal(sequenceName: string): Promise<string> {
    if (sequenceName === 'uuid') {
      return uuid();
    }
    switch (this.connection.options.type) {
      case 'oracle':
        return (
          await this.connection.query(
            `select ${sequenceName}.NEXTVAL from DUAL`
          )
        )[0].NEXTVAL;
      case 'postgres':
        return (
          await this.connection.query(`select nextval('${sequenceName}') as id`)
        )[0].id;
      default:
        return uuid();
    }
  }
}
