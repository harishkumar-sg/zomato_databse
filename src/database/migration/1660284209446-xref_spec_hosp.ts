import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class xrefSpecHosp1660284209446 implements MigrationInterface {

    private readonly tableName = "xref_spec_hosp";
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
            name: "hosp_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "spec_id",
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
