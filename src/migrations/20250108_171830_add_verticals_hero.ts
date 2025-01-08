import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_hero_type" ADD VALUE 'verticals';
  ALTER TYPE "public"."enum__pages_v_blocks_hero_type" ADD VALUE 'verticals';
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_first_vertical_first_title" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_first_vertical_first_subtitle" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_first_vertical_first_description" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_second_vertical_second_title" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_second_vertical_second_subtitle" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_second_vertical_second_description" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_third_vertical_third_title" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_third_vertical_third_subtitle" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_third_vertical_third_description" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_fourth_vertical_fourth_title" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_fourth_vertical_fourth_subtitle" varchar;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "verticals_fourth_vertical_fourth_description" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_first_vertical_first_title" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_first_vertical_first_subtitle" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_first_vertical_first_description" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_second_vertical_second_title" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_second_vertical_second_subtitle" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_second_vertical_second_description" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_third_vertical_third_title" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_third_vertical_third_subtitle" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_third_vertical_third_description" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_fourth_vertical_fourth_title" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_fourth_vertical_fourth_subtitle" varchar;
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "verticals_fourth_vertical_fourth_description" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_first_vertical_first_title";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_first_vertical_first_subtitle";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_first_vertical_first_description";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_second_vertical_second_title";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_second_vertical_second_subtitle";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_second_vertical_second_description";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_third_vertical_third_title";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_third_vertical_third_subtitle";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_third_vertical_third_description";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_fourth_vertical_fourth_title";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_fourth_vertical_fourth_subtitle";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "verticals_fourth_vertical_fourth_description";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_first_vertical_first_title";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_first_vertical_first_subtitle";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_first_vertical_first_description";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_second_vertical_second_title";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_second_vertical_second_subtitle";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_second_vertical_second_description";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_third_vertical_third_title";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_third_vertical_third_subtitle";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_third_vertical_third_description";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_fourth_vertical_fourth_title";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_fourth_vertical_fourth_subtitle";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "verticals_fourth_vertical_fourth_description";
  ALTER TABLE "public"."pages_blocks_hero" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_hero_type";
  CREATE TYPE "public"."enum_pages_blocks_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."pages_blocks_hero" ALTER COLUMN "type" SET DATA TYPE "public"."enum_pages_blocks_hero_type" USING "type"::"public"."enum_pages_blocks_hero_type";
  ALTER TABLE "public"."_pages_v_blocks_hero" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_hero_type";
  CREATE TYPE "public"."enum__pages_v_blocks_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."_pages_v_blocks_hero" ALTER COLUMN "type" SET DATA TYPE "public"."enum__pages_v_blocks_hero_type" USING "type"::"public"."enum__pages_v_blocks_hero_type";`)
}
