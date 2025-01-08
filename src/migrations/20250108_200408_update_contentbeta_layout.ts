import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_content_beta_columns_highlight_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_content_beta_layout" AS ENUM('grid', 'centered', 'split');
  CREATE TYPE "public"."enum_pages_blocks_content_beta_center_highlight_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_content_beta_columns_highlight_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_content_beta_layout" AS ENUM('grid', 'centered', 'split');
  CREATE TYPE "public"."enum__pages_v_blocks_content_beta_center_highlight_color" AS ENUM('primary', 'secondary');
  ALTER TABLE "pages_blocks_content_beta_columns" ADD COLUMN "highlight_enabled" boolean;
  ALTER TABLE "pages_blocks_content_beta_columns" ADD COLUMN "highlight_color" "enum_pages_blocks_content_beta_columns_highlight_color";
  ALTER TABLE "pages_blocks_content_beta" ADD COLUMN "layout" "enum_pages_blocks_content_beta_layout" DEFAULT 'grid';
  ALTER TABLE "pages_blocks_content_beta" ADD COLUMN "center_rich_text" jsonb;
  ALTER TABLE "pages_blocks_content_beta" ADD COLUMN "center_highlight_enabled" boolean;
  ALTER TABLE "pages_blocks_content_beta" ADD COLUMN "center_highlight_color" "enum_pages_blocks_content_beta_center_highlight_color";
  ALTER TABLE "_pages_v_blocks_content_beta_columns" ADD COLUMN "highlight_enabled" boolean;
  ALTER TABLE "_pages_v_blocks_content_beta_columns" ADD COLUMN "highlight_color" "enum__pages_v_blocks_content_beta_columns_highlight_color";
  ALTER TABLE "_pages_v_blocks_content_beta" ADD COLUMN "layout" "enum__pages_v_blocks_content_beta_layout" DEFAULT 'grid';
  ALTER TABLE "_pages_v_blocks_content_beta" ADD COLUMN "center_rich_text" jsonb;
  ALTER TABLE "_pages_v_blocks_content_beta" ADD COLUMN "center_highlight_enabled" boolean;
  ALTER TABLE "_pages_v_blocks_content_beta" ADD COLUMN "center_highlight_color" "enum__pages_v_blocks_content_beta_center_highlight_color";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_content_beta_columns" DROP COLUMN IF EXISTS "highlight_enabled";
  ALTER TABLE "pages_blocks_content_beta_columns" DROP COLUMN IF EXISTS "highlight_color";
  ALTER TABLE "pages_blocks_content_beta" DROP COLUMN IF EXISTS "layout";
  ALTER TABLE "pages_blocks_content_beta" DROP COLUMN IF EXISTS "center_rich_text";
  ALTER TABLE "pages_blocks_content_beta" DROP COLUMN IF EXISTS "center_highlight_enabled";
  ALTER TABLE "pages_blocks_content_beta" DROP COLUMN IF EXISTS "center_highlight_color";
  ALTER TABLE "_pages_v_blocks_content_beta_columns" DROP COLUMN IF EXISTS "highlight_enabled";
  ALTER TABLE "_pages_v_blocks_content_beta_columns" DROP COLUMN IF EXISTS "highlight_color";
  ALTER TABLE "_pages_v_blocks_content_beta" DROP COLUMN IF EXISTS "layout";
  ALTER TABLE "_pages_v_blocks_content_beta" DROP COLUMN IF EXISTS "center_rich_text";
  ALTER TABLE "_pages_v_blocks_content_beta" DROP COLUMN IF EXISTS "center_highlight_enabled";
  ALTER TABLE "_pages_v_blocks_content_beta" DROP COLUMN IF EXISTS "center_highlight_color";
  DROP TYPE "public"."enum_pages_blocks_content_beta_columns_highlight_color";
  DROP TYPE "public"."enum_pages_blocks_content_beta_layout";
  DROP TYPE "public"."enum_pages_blocks_content_beta_center_highlight_color";
  DROP TYPE "public"."enum__pages_v_blocks_content_beta_columns_highlight_color";
  DROP TYPE "public"."enum__pages_v_blocks_content_beta_layout";
  DROP TYPE "public"."enum__pages_v_blocks_content_beta_center_highlight_color";`)
}
