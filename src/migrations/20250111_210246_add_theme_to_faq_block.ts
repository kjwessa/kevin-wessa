import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_faq_block_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_block_theme" AS ENUM('light', 'dark');
  ALTER TABLE "pages_blocks_faq_block" ADD COLUMN "theme" "enum_pages_blocks_faq_block_theme" DEFAULT 'light';
  ALTER TABLE "_pages_v_blocks_faq_block" ADD COLUMN "theme" "enum__pages_v_blocks_faq_block_theme" DEFAULT 'light';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_faq_block" DROP COLUMN IF EXISTS "theme";
  ALTER TABLE "_pages_v_blocks_faq_block" DROP COLUMN IF EXISTS "theme";
  DROP TYPE "public"."enum_pages_blocks_faq_block_theme";
  DROP TYPE "public"."enum__pages_v_blocks_faq_block_theme";`)
}
