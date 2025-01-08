import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_media_slider_settings_variant" AS ENUM('centered', 'grid', 'contained');
  CREATE TYPE "public"."enum_pages_blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4');
  CREATE TYPE "public"."enum__pages_v_blocks_media_slider_settings_variant" AS ENUM('centered', 'grid', 'contained');
  CREATE TYPE "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4');
  ALTER TABLE "pages_blocks_media_slider" ADD COLUMN "settings_variant" "enum_pages_blocks_media_slider_settings_variant" DEFAULT 'centered';
  ALTER TABLE "pages_blocks_media_slider" ADD COLUMN "settings_aspect_ratio" "enum_pages_blocks_media_slider_settings_aspect_ratio" DEFAULT '4/3';
  ALTER TABLE "_pages_v_blocks_media_slider" ADD COLUMN "settings_variant" "enum__pages_v_blocks_media_slider_settings_variant" DEFAULT 'centered';
  ALTER TABLE "_pages_v_blocks_media_slider" ADD COLUMN "settings_aspect_ratio" "enum__pages_v_blocks_media_slider_settings_aspect_ratio" DEFAULT '4/3';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_media_slider" DROP COLUMN IF EXISTS "settings_variant";
  ALTER TABLE "pages_blocks_media_slider" DROP COLUMN IF EXISTS "settings_aspect_ratio";
  ALTER TABLE "_pages_v_blocks_media_slider" DROP COLUMN IF EXISTS "settings_variant";
  ALTER TABLE "_pages_v_blocks_media_slider" DROP COLUMN IF EXISTS "settings_aspect_ratio";
  DROP TYPE "public"."enum_pages_blocks_media_slider_settings_variant";
  DROP TYPE "public"."enum_pages_blocks_media_slider_settings_aspect_ratio";
  DROP TYPE "public"."enum__pages_v_blocks_media_slider_settings_variant";
  DROP TYPE "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio";`)
}
