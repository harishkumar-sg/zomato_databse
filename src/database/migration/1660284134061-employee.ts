import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm";
export class employee1660284134061 implements MigrationInterface {
  private readonly tableName = "employee";
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
            name: "desg_id",
            type: "uuid",
            isNullable: true,
            default: "uuid_generate_v4()",
          },
          {
            name: "add_id",
            type: "uuid",
            isNullable: true,
            default: "uuid_generate_v4()",
          },
          {
            name: "hosp_id",
            type: "uuid",
            isNullable: true,
            default: "uuid_generate_v4()",
          },
          {
            name: "loc_id",
            type: "uuid",
            isNullable: true,
            default: "uuid_generate_v4()",
          },
          {
            name: "salary",
            type: "numeric",
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
        //   new TableForeignKey({
        //     name: 'FK_location_id',
        //     referencedTableName: 'location',
        //     columnNames: ['loc_id'],
        //     referencedColumnNames: ['loc_id'],
        //   }),

        //   new TableForeignKey({
        //     name :'FK_address_id',
        //     referencedTableName:'address',
        //     columnNames:['add_id'],
        //     referencedColumnNames:['id']
        //   })
        //   ,
        //   new TableForeignKey({
        //     name :'FK_jobtype_id',
        //     referencedTableName:'job_type',
        //     columnNames:['desg_id'],
        //     referencedColumnNames:['id']
        //   })
        // ],
      









      })
    );
    // await queryRunner.createIndex(
    //     this.tableName,
    //     new TableIndex({
    //       name: 'employee_location_id_index',
    //       columnNames: ['loc_id'],
    //     })
    //   );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
