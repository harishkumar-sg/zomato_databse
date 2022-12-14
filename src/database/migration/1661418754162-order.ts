import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class order1661418754162 implements MigrationInterface {

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
            name: "order_date",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "customer_id",
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
            name: "pickup_id",
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
        foreignKeys: [
          
          new TableForeignKey({
            name :'FK_order_customer',
            referencedTableName:'order',
            columnNames:['customer_id'],
            referencedColumnNames:['customer_id']
          })
         
        ],
        
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }

}
