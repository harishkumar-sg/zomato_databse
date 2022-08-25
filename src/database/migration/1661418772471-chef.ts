import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class chef1661418772471 implements MigrationInterface {

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
            name: "l_name",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "f_name",
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
            name: "phone_nor",
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
        foreignKeys: [
          
          new TableForeignKey({
            name :'FK_chef_order',
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
