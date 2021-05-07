import { Column } from 'typeorm';
import { StoreObject } from '@luomus/shared/models';

export abstract class DocumentBase {

  @Column({ name: 'DATA', type: 'simple-json' })
  data?: StoreObject;

  @Column({ name: 'TYPE' })
  type?: string;

  @Column({ name: 'API_VERSION' })
  api_version?: number;

  @Column({ name: 'SEQUENCE' })
  sequence?: number;

  @Column({ name: 'CREATED' })
  created: Date = new Date();

  @Column({ name: 'EDITED' })
  edited: Date = new Date();
}
