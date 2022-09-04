import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class orderList1662114169790 implements MigrationInterface {
  private readonly tableName = "order_list";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "order_list_id",
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
            name: "item_id",
            type: "uuid",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "chef_id",
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
            name: "FK_orderlist_items",
            referencedTableName: "items",
            columnNames: ["item_id"],
            referencedColumnNames: ["item_id"],
          }),
          new TableForeignKey({
            name: "FK_chef_items",
            referencedTableName: "chef",
            columnNames: ["chef_id"],
            referencedColumnNames: ["chef_id"],
          }),
          new TableForeignKey({
            name: "FK_user_items",
            referencedTableName: "users",
            columnNames: ["user_id"],
            referencedColumnNames: ["user_id"],
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
