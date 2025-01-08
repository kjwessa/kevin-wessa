import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- First, update all existing 3/2 values to 4/3 to prevent data loss
    UPDATE "pages_blocks_media_slider" 
    SET "settings_aspect_ratio" = '4/3' 
    WHERE "settings_aspect_ratio" = '3/2';
    
    UPDATE "_pages_v_blocks_media_slider" 
    SET "settings_aspect_ratio" = '4/3' 
    WHERE "settings_aspect_ratio" = '3/2';

    UPDATE "_pages_v__blocks_media_slider" 
    SET "settings_aspect_ratio" = '4/3' 
    WHERE "settings_aspect_ratio" = '3/2';

    -- Then recreate the types with the new value
    ALTER TABLE "pages_blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" TYPE text;
    ALTER TABLE "_pages_v_blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" TYPE text;
    ALTER TABLE "_pages_v__blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" TYPE text;

    DROP TYPE IF EXISTS "public"."enum_pages_blocks_media_slider_settings_aspect_ratio";
    DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio";
    DROP TYPE IF EXISTS "public"."enum__pages_v__blocks_media_slider_settings_aspect_ratio";

    CREATE TYPE "public"."enum_pages_blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4', '3/2');
    CREATE TYPE "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4', '3/2');
    CREATE TYPE "public"."enum__pages_v__blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4', '3/2');

    ALTER TABLE "pages_blocks_media_slider" 
      ALTER COLUMN "settings_aspect_ratio" 
      TYPE "enum_pages_blocks_media_slider_settings_aspect_ratio" 
      USING COALESCE("settings_aspect_ratio", '4/3')::"enum_pages_blocks_media_slider_settings_aspect_ratio";

    ALTER TABLE "_pages_v_blocks_media_slider" 
      ALTER COLUMN "settings_aspect_ratio" 
      TYPE "enum__pages_v_blocks_media_slider_settings_aspect_ratio" 
      USING COALESCE("settings_aspect_ratio", '4/3')::"enum__pages_v_blocks_media_slider_settings_aspect_ratio";

    ALTER TABLE "_pages_v__blocks_media_slider" 
      ALTER COLUMN "settings_aspect_ratio" 
      TYPE "enum__pages_v__blocks_media_slider_settings_aspect_ratio" 
      USING COALESCE("settings_aspect_ratio", '4/3')::"enum__pages_v__blocks_media_slider_settings_aspect_ratio";
  `)
}

export async function down({ db, payload }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    -- Update any 3/2 values to 4/3 before removing the option
    UPDATE "pages_blocks_media_slider" 
    SET "settings_aspect_ratio" = '4/3' 
    WHERE "settings_aspect_ratio" = '3/2';
    
    UPDATE "_pages_v_blocks_media_slider" 
    SET "settings_aspect_ratio" = '4/3' 
    WHERE "settings_aspect_ratio" = '3/2';

    UPDATE "_pages_v__blocks_media_slider" 
    SET "settings_aspect_ratio" = '4/3' 
    WHERE "settings_aspect_ratio" = '3/2';

    -- Then recreate the types without 3/2
    ALTER TABLE "pages_blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" TYPE text;
    ALTER TABLE "_pages_v_blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" TYPE text;
    ALTER TABLE "_pages_v__blocks_media_slider" ALTER COLUMN "settings_aspect_ratio" TYPE text;

    DROP TYPE IF EXISTS "public"."enum_pages_blocks_media_slider_settings_aspect_ratio";
    DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio";
    DROP TYPE IF EXISTS "public"."enum__pages_v__blocks_media_slider_settings_aspect_ratio";

    CREATE TYPE "public"."enum_pages_blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4');
    CREATE TYPE "public"."enum__pages_v_blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4');
    CREATE TYPE "public"."enum__pages_v__blocks_media_slider_settings_aspect_ratio" AS ENUM('4/3', '16/9', '1/1', '3/4');

    ALTER TABLE "pages_blocks_media_slider" 
      ALTER COLUMN "settings_aspect_ratio" 
      TYPE "enum_pages_blocks_media_slider_settings_aspect_ratio" 
      USING COALESCE("settings_aspect_ratio", '4/3')::"enum_pages_blocks_media_slider_settings_aspect_ratio";

    ALTER TABLE "_pages_v_blocks_media_slider" 
      ALTER COLUMN "settings_aspect_ratio" 
      TYPE "enum__pages_v_blocks_media_slider_settings_aspect_ratio" 
      USING COALESCE("settings_aspect_ratio", '4/3')::"enum__pages_v_blocks_media_slider_settings_aspect_ratio";

    ALTER TABLE "_pages_v__blocks_media_slider" 
      ALTER COLUMN "settings_aspect_ratio" 
      TYPE "enum__pages_v__blocks_media_slider_settings_aspect_ratio" 
      USING COALESCE("settings_aspect_ratio", '4/3')::"enum__pages_v__blocks_media_slider_settings_aspect_ratio";
  `)
}
