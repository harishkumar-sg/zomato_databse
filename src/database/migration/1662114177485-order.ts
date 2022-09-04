import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class order1662114177485 implements MigrationInterface {
  private readonly tableName = "order";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "order_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "bill",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "delivery_guy_id",
            type: "uuid",
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
        foreignKeys: [
          new TableForeignKey({
            name: "FK_order_user",
            referencedTableName: "users",
            columnNames: ["user_id"],
            referencedColumnNames: ["user_id"],
          }),
          new TableForeignKey({
            name: "FK_order_deliveryGuy",
            referencedTableName: "delivery_guy",
            columnNames: ["delivery_guy_id"],
            referencedColumnNames: ["delivery_guy_id"],
          }),
        ],
      })
        
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
