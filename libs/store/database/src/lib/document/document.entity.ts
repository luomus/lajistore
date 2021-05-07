import { Column, Entity, PrimaryColumn } from 'typeorm';
import { DocumentBase } from '../document-base/document-base.entity';

@Entity({
  name: 'LAJI_DOCUMENT'
})
export class Document extends DocumentBase {
  @PrimaryColumn({ name: 'ID' })
  id?: string;

  @Column({ name: 'VERSION' })
  version?: number;

  @PrimaryColumn({ name: 'SOURCE' })
  source?: string;
}
