import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class chef1661315828962 implements MigrationInterface {

    private readonly tableName = "chef";
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "chef_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "Lname",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "Fname",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          
          {
            name: "user_name",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "phone_number",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "order_id",
            type: "uuid",
            isNullable: true,
            isUnique: true,

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
