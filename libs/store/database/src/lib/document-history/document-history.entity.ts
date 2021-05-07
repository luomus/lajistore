import { Column, Entity, PrimaryColumn } from 'typeorm';
import { DocumentBase } from '../document-base/document-base.entity';

/**
 * This could not inherit Document because the primary key for version,
 * overridden here, would not work. Primary key in here needs to be:
 * ID,VERSION,SOURCE
 */

@Entity({
  name: 'LAJI_DOCUMENT_HISTORY'
})
export class DocumentHistory extends DocumentBase {

  @PrimaryColumn({ name: 'ID' })
  id?: string;

  @PrimaryColumn({ name: 'VERSION' })
  version?: number;

  @PrimaryColumn({ name: 'SOURCE' })
  source?: string;

  @Column({ name: 'DELETED' })
  deleted: Date = new Date();
}
