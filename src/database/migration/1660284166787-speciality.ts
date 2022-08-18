import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class speciality1660284166787 implements MigrationInterface {

    private readonly tableName = "speciality";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "spec_name",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "descrip",
            type: "uuid",
            isNullable: true,
          },
        
          {
            name: "created_at",
            type: "timestamptz",
            isNullable: false,
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamptz",
            isNullable: false,
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }

}
