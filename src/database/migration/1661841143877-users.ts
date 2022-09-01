import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1661841143877 implements MigrationInterface {
  private readonly tableName = "users";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "user_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "phone",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: true,
            isUnique: false,
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
