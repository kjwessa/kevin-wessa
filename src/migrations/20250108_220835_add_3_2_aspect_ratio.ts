import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.pool.query(`
    ALTER TYPE enum_pages_blocks_media_slider_settings_aspect_ratio ADD VALUE IF NOT EXISTS '3/2';
  `)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  // Note: PostgreSQL does not support removing enum values
  // We'll need to handle this differently if we need to remove the value
  console.log('Cannot remove enum value in PostgreSQL')
}
