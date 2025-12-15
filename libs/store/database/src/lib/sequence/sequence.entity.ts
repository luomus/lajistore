import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: 'STORE_SEQUENCE'})
export abstract class Sequence {
  @PrimaryColumn({ name: 'KEY' })
  key?: string;

  @Column({ name: 'NEXT' })
  next?: number;
}
