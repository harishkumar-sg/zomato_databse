import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class deliveryGuy1662100736701 implements MigrationInterface {
  private readonly tableName = "delivery_guy";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "delivery_guy_id",
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
            name: "status",
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
        // foreignKeys: [
        //   new TableForeignKey({
        //     name: "FK_delivery_guy_order",
        //     referencedTableName: "order",
        //     columnNames: ["order_id"],
        //     referencedColumnNames: ["order_id"],
        //   }),
        // ],
      })
    );
  }

    
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}