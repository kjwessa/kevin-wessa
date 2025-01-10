import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_about_intro" ADD COLUMN "banner_text" jsonb;
  ALTER TABLE "_pages_v_blocks_about_intro" ADD COLUMN "banner_text" jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_about_intro" DROP COLUMN IF EXISTS "banner_text";
  ALTER TABLE "_pages_v_blocks_about_intro" DROP COLUMN IF EXISTS "banner_text";`)
}
