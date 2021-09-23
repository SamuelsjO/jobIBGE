import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableIbge1632437657323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(
        // 'CREATE TABLE IF NOT EXISTS IBGE (' +
        // ' ID int NOT NULL, ' +
        // ' CITY varchar(255) NOT NULL, ' +
        // ' UF varchar(5) NOT NULL, ' +
        // ' PRIMARY KEY (ID) ' +
        // ');',
        // );
        await queryRunner.createTable(
            new Table({
                name: "IBGE",
                columns: [
                    {
                        name: "ID",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "CITY",
                        type: "varchar",
                    },
                    {
                        name: "UF",
                        type: "varchar",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('IBGE');
    }

}
