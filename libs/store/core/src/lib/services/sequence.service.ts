import { HttpException, HttpStatus, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { SequenceRepository, Sequence } from '@luomus/store/database';

@Injectable()
export class SequenceService {
  constructor(
    private readonly sequenceRepository: SequenceRepository
  ) {}

  /**
   * Get next value from sequence
   *
   * @param systemID
   */
  async next(key: string, createIfMissing = false): Promise<number> {
    const sequence = await this.sequenceRepository.next(key, createIfMissing);
    if (sequence) {
      return sequence;
    }

    throw new HttpException(
      `The ${key} sequence does not exist`,
      HttpStatus.NOT_FOUND
    );
  }

  /**
   * Create new sequence
   *
   * @param userData
   */
  create(seq: Sequence): Promise<void> {
    if (!seq.key) {
      throw new UnprocessableEntityException('New sequence needs a name specified.');
    }

    return this.sequenceRepository.create(seq as Required<Sequence>);
  }
}
