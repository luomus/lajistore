import { MigrationInterface, QueryRunner } from 'typeorm';

export class Document1602680331499 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SEQUENCE "LAJISTORE_SEQ" INCREMENT BY 1 CACHE 2`);
    await queryRunner.query(`CREATE SEQUENCE "FORM_SEQ" INCREMENT BY 1 CACHE 2`);
    await queryRunner.query(
      `CREATE SEQUENCE "ANNOTATION_SEQ" INCREMENT BY 1 CACHE 2`
    );
    await queryRunner.query(
      `CREATE SEQUENCE "NAMED_PLACE_SEQ" INCREMENT BY 1 CACHE 2`
    );
    await queryRunner.query(
      `CREATE SEQUENCE "NOTIFICATION_SEQ" INCREMENT BY 1 CACHE 2`
    );
    await queryRunner.query(
      `CREATE SEQUENCE "FORM_PERMISSION_SEQ" INCREMENT BY 1 CACHE 2`
    );
    await queryRunner.query(
      `CREATE SEQUENCE "DATASET_SEQUENCE" INCREMENT BY 1 CACHE 2`
    );

    await queryRunner.query(`create trigger TR_LAJI_DOCUMENT_HISTORY
    before update or delete
    on LAJI_DOCUMENT
    for each row
DECLARE
    v_version NUMBER;
BEGIN

    SELECT MAX(VERSION) + 1
      INTO v_version
      FROM LAJI_DOCUMENT_HISTORY
      WHERE LAJI_DOCUMENT_HISTORY.ID = :old.ID
        AND LAJI_DOCUMENT_HISTORY.SOURCE = :old.SOURCE;


    IF v_version IS NULL THEN
       v_version := 1;
    END IF;

    IF UPDATING THEN
      :new.VERSION := v_version + 1;
      :new.EDITED := CAST(SYS_EXTRACT_UTC(SYSTIMESTAMP) AS DATE);
    END IF;

    INSERT INTO laji_document_history
    (
      ID,
      DATA,
      TYPE,
      VERSION,
      API_VERSION,
      SEQUENCE,
      SOURCE,
      CREATED,
      EDITED,
      DELETED
    )
    VALUES
      (
        :old.ID,
        :old.DATA,
        :old.TYPE,
        v_version,
        :old.API_VERSION,
        :old.SEQUENCE,
        :old.SOURCE,
        :old.CREATED,
        :old.EDITED,
        CAST(SYS_EXTRACT_UTC(SYSTIMESTAMP) AS DATE)
      );
  END TR_LAJI_DOCUMENT_HISTORY;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SEQUENCE "LAJISTORE_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "FORM_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "ANNOTATION_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "NAMED_PLACE_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "NOTIFICATION_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "FORM_PERMISSION_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "DATASET_SEQUENCE"`);
    await queryRunner.query(`DROP TRIGGER "TR_LAJI_DOCUMENT_HISTORY"`);
  }
}
