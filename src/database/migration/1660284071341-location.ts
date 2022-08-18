import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class location1660284071341 implements MigrationInterface {

  private readonly tableName = "location";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "loc_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "hosp_id",
            type: "uuid",
            isUnique: false,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "pincode",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "city",
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
