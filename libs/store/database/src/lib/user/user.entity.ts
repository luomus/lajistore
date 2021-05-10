import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: 'STORE_USER'})
export class User {
  @PrimaryColumn({name: 'SYSTEM_ID'})
  systemID?: string;

  @Column({name: 'PASSWORD'})
  password?: string;
}
