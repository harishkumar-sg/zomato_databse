import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class customer1661321874980 implements MigrationInterface {

    private readonly tableName = "customer";
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "customer_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "email",
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
            name: "Fname",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "Lname",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "payment_id",
            type: "uuid",
            isNullable: true,
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
            name: 'FK_customer_order',
            referencedTableName: 'order',
            columnNames: ['customer_id'],
            referencedColumnNames: ['customer_id'],
          }),

         
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }

}
