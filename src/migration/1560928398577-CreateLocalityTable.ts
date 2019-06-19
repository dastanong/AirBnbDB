import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLocalityTable1560928398577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "locality" ("id" int NOT NULL IDENTITY(1,1), "street_name" nvarchar(255) NOT NULL, "city" nvarchar(255) NOT NULL, "state" nvarchar(255) NOT NULL, "country" nvarchar(255) NOT NULL, CONSTRAINT "PK_c0445d9b8706ac2d31be91c9b6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "property" ADD "locality_id" int`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_54b0ab35998b5a0bcd876b973b0" FOREIGN KEY ("locality_id") REFERENCES "locality"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_54b0ab35998b5a0bcd876b973b0"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "locality_id"`);
        await queryRunner.query(`DROP TABLE "locality"`);
    }

}
