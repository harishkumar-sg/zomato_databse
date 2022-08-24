import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class menu1661321840424 implements MigrationInterface {

    private readonly tableName = "menu";
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "menu_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "price",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "start_date",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "end_date",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "food_id",
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
            name: 'FK_menu_administrator',
            referencedTableName: 'administrator',
            columnNames: ['menu_id'],
            referencedColumnNames: ['menu_id'],
          }),

          new TableForeignKey({
            name :'FK_menu_food_item',
            referencedTableName:'food_item',
            columnNames:['food_id'],
            referencedColumnNames:['food_id']
          })
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
  

}
