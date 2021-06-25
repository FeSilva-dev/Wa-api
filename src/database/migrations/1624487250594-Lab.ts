import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Lab1624487250594 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "labs",
                columns: [
                    {
                        name: 'id',
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "exam_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "isActive",
                        type: "boolean"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKExams",
                        referencedTableName: "exams",
                        referencedColumnNames: ["id"],
                        columnNames: ["exam_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("labs");
    }

}
