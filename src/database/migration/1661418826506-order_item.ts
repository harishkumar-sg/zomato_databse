import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class orderItem1661418826506 implements MigrationInterface {

    private readonly tableName = "order_item";
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
            name: "food_id",
            type: "uuid",
            isNullable: true,
            isUnique:true
          },
          {
            name: "quantity",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "unit_price",
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
            name :'FK_order_item_food_item',
            referencedTableName:'food_item',
            columnNames:['food_id'],
            referencedColumnNames:['food_id']
          }),
          new TableForeignKey({
            name :'FK_order_item_order',
            referencedTableName:'order',
            columnNames:['order_id'],
            referencedColumnNames:['order_id']
          })
         
        ],
        
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }

}
