import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class items1661841152190 implements MigrationInterface {
  private readonly tableName = "items";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "item_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "restaurant_id",
            type: "uuid",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "price",
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
        foreignKeys: [
          new TableForeignKey({
            name: "FK_items_restaurant",
            referencedTableName: "restaurant",
            columnNames: ["restaurant_id"],
            referencedColumnNames: ["restaurant_id"],
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
