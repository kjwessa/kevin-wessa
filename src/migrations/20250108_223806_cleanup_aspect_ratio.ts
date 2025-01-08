import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "public"."pages_blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" SET DATA TYPE text;
   DROP TYPE IF EXISTS "public"."enum_pages_blocks_media_slider_settings_aspect_ratio" CASCADE;
    CREATE TYPE "public"."enum_pages_blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4');
   ALTER TABLE "public"."pages_blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" SET DATA TYPE "public"."enum_pages_blocks_media_slider_settings_aspect_ratio" USING "settings_aspect_ratio"::"public"."enum_pages_blocks_media_slider_settings_aspect_ratio";
   ALTER TABLE "public"."_pages_v_blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" SET DATA TYPE text;
   DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio" CASCADE;
    CREATE TYPE "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4');
   ALTER TABLE "public"."_pages_v_blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" SET DATA TYPE "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio" USING "settings_aspect_ratio"::"public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TYPE "public"."enum_pages_blocks_media_slider_settings_aspect_ratio" ADD VALUE '3/2' BEFORE '4/3';
   ALTER TYPE "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio" ADD VALUE '3/2' BEFORE '4/3';`)
}
