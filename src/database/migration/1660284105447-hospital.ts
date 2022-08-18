import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class hospital1660284105447 implements MigrationInterface {

    private readonly tableName = 'hospital';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "id",
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
            name: "manage_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "pincode",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "loc_id",
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
        // foreignKeys: [
        //     new TableForeignKey({
        //       name: 'FK_location_id',
        //       referencedTableName: 'location',
        //       columnNames: ['loc_id'],
        //       referencedColumnNames: ['loc_id'],
        //     })
        // ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }


}
