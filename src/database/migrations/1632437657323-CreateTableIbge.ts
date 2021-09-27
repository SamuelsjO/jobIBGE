import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableIbge1632437657323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE IF NOT EXISTS IBGE ( ' +
              ' ID int NOT NULL AUTO_INCREMENT, ' +
              ' STATE varchar(4) NOT NULL, ' +
              ' CITY varchar(255) NOT NULL, ' +
              ' PRIMARY KEY (ID) ' +
              ');',
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('IBGE');
    }

}
