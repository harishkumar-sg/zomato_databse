import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class payment1661315819883 implements MigrationInterface {

    private readonly tableName = "payment";
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "payment_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "customer_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "order_id",
            type: "uuid",
            isNullable: true,
            isUnique: true
           
          },
          {
            name: "payment_date",
            type: "varchar",
            isNullable: true,
            isUnique: false,
           
          },
          {
            name: "amount",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },{
            name: "payment_type",
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
