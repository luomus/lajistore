import { Connection, FindOptionsWhere } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Sequence } from './sequence.entity';

@Injectable()
export class SequenceRepository {
  constructor(private connection: Connection){}

  async create(sequence: Required<Sequence>) {
        const repo = this.connection.getRepository(Sequence);

        const seq = repo.create({ key: sequence.key, next: sequence.next || 1 });
        await repo.insert(seq);

        return seq;
  }

  async next(key: string, createIfMissing = false) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    let nextVal;

    try {
      const seq = await queryRunner.manager.findOneBy(Sequence, { key });

      if (seq) {
        nextVal = seq.next || 1;

        seq.next = nextVal + 1

        await queryRunner.manager.save(seq);
      } else if (createIfMissing === true) {
        nextVal = 1;

        const newSeq = queryRunner.manager.create(Sequence, { key: key, next: nextVal + 1 })

        await queryRunner.manager.insert(Sequence, newSeq);
      }
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      queryRunner.release();
    }

    return nextVal;
  }
}
