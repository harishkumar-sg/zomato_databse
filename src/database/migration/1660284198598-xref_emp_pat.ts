import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class xrefEmpPat1660284198598 implements MigrationInterface {

    private readonly tableName = "xref_emp_pat";
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
            name: "emp_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "pat_id",
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
