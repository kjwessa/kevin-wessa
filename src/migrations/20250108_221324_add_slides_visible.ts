import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_media_slider" ADD COLUMN "settings_slides_visible" varchar DEFAULT '1.25';
    ALTER TABLE "_pages_v_blocks_media_slider" ADD COLUMN "settings_slides_visible" varchar DEFAULT '1.25';
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_media_slider" DROP COLUMN IF EXISTS "settings_slides_visible";
    ALTER TABLE "_pages_v_blocks_media_slider" DROP COLUMN IF EXISTS "settings_slides_visible";
  `)
}
