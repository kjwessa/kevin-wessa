import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_media_slider_settings_gap" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_media_slider_settings_gap" AS ENUM('small', 'medium', 'large');
  ALTER TABLE "pages_blocks_media_slider" ADD COLUMN "settings_gap" "enum_pages_blocks_media_slider_settings_gap" DEFAULT 'medium';
  ALTER TABLE "_pages_v_blocks_media_slider" ADD COLUMN "settings_gap" "enum__pages_v_blocks_media_slider_settings_gap" DEFAULT 'medium';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_media_slider" DROP COLUMN IF EXISTS "settings_gap";
  ALTER TABLE "_pages_v_blocks_media_slider" DROP COLUMN IF EXISTS "settings_gap";
  DROP TYPE "public"."enum_pages_blocks_media_slider_settings_gap";
  DROP TYPE "public"."enum__pages_v_blocks_media_slider_settings_gap";`)
}
