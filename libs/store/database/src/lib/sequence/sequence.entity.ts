import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: 'LAJI_SEQUENCE'})
export abstract class Sequence {
  @PrimaryColumn({ name: 'KEY' })
  key?: string;

  @Column({ name: 'NEXT' })
  next?: number;
}
