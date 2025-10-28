import { MigrationInterface, QueryRunner } from 'typeorm';

export class Document1602680331499 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SEQUENCE LAJISTORE_SEQ START 1`);
    await queryRunner.query(`CREATE SEQUENCE FORM_SEQ START 1`);
    await queryRunner.query(
      `CREATE SEQUENCE ANNOTATION_SEQ START 1`
    );
    await queryRunner.query(
      `CREATE SEQUENCE NAMED_PLACE_SEQ START 1`
    );
    await queryRunner.query(
      `CREATE SEQUENCE NOTIFICATION_SEQ START 1`
    );
    await queryRunner.query(
      `CREATE SEQUENCE FORM_PERMISSION_SEQ START 1`
    );
    await queryRunner.query(
      `CREATE SEQUENCE DATASET_SEQUENCE START 1`
    );

    await queryRunner.query(`CREATE FUNCTION before_update() returns trigger
    language plpgsql
as $$
DECLARE v_version numeric;
BEGIN

    SELECT MAX("VERSION") + 1
      INTO v_version
      FROM "LAJI_DOCUMENT_HISTORY"
      WHERE "LAJI_DOCUMENT_HISTORY"."ID" = OLD."ID"
        AND "LAJI_DOCUMENT_HISTORY"."SOURCE" = OLD."SOURCE";

    IF v_version IS NULL THEN
       v_version := 1;
    END IF;


    NEW."VERSION" := v_version + 1;
    NEW."EDITED" := now();
    INSERT INTO "LAJI_DOCUMENT_HISTORY"
        (
          "ID",
          "DATA",
          "TYPE",
          "VERSION",
          "API_VERSION",
          "SEQUENCE",
          "SECONDARY_SEQUENCE",
          "SOURCE",
          "CREATED",
          "EDITED",
          "DELETED"
        )
      VALUES
        (
          OLD."ID",
          OLD."DATA",
          OLD."TYPE",
          v_version,
          OLD."API_VERSION",
          OLD."SEQUENCE",
          OLD."SECONDARY_SEQUENCE",
          OLD."SOURCE",
          OLD."CREATED",
          OLD."EDITED",
          now()
        );
    RETURN NEW;
END;
$$`);

    await queryRunner.query(`CREATE FUNCTION before_delete() returns trigger
    language plpgsql
as $$
DECLARE v_version numeric;
BEGIN

    SELECT MAX("VERSION") + 1
      INTO v_version
      FROM "LAJI_DOCUMENT_HISTORY"
      WHERE "LAJI_DOCUMENT_HISTORY"."ID" = OLD."ID"
        AND "LAJI_DOCUMENT_HISTORY"."SOURCE" = OLD."SOURCE";

    IF v_version IS NULL THEN
       v_version := 1;
    END IF;

    INSERT INTO "LAJI_DOCUMENT_HISTORY"
        (
          "ID",
          "DATA",
          "TYPE",
          "VERSION",
          "API_VERSION",
          "SEQUENCE",
          "SECONDARY_SEQUENCE",
          "SOURCE",
          "CREATED",
          "EDITED",
          "DELETED"
        )
      VALUES
        (
          OLD."ID",
          OLD."DATA",
          OLD."TYPE",
          v_version,
          OLD."API_VERSION",
          OLD."SEQUENCE",
          OLD."SECONDARY_SEQUENCE",
          OLD."SOURCE",
          OLD."CREATED",
          OLD."EDITED",
          now()
        );
    RETURN OLD;
END;
$$`);
    await queryRunner.query(`CREATE TRIGGER tr_before_update BEFORE UPDATE ON "LAJI_DOCUMENT"
      FOR EACH ROW EXECUTE PROCEDURE before_update()`)
    await queryRunner.query(`CREATE TRIGGER tr_before_delete BEFORE DELETE ON "LAJI_DOCUMENT"
      FOR EACH ROW EXECUTE PROCEDURE before_delete()`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SEQUENCE "LAJISTORE_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "FORM_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "ANNOTATION_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "NAMED_PLACE_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "NOTIFICATION_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "FORM_PERMISSION_SEQ"`);
    await queryRunner.query(`DROP SEQUENCE "DATASET_SEQUENCE"`);
    await queryRunner.query(`DROP FUNCTION "before_update"`);
    await queryRunner.query(`DROP FUNCTION "before_delete"`);
    await queryRunner.query(`DROP TRIGGER tr_before_update ON "LAJI_DOCUMENT"`);
    await queryRunner.query(`DROP TRIGGER tr_before_delete ON "LAJI_DOCUMENT"`);
  }
}
