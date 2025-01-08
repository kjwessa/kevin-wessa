import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_bio_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_primary" varchar,
  	"title_secondary" varchar,
  	"content" jsonb,
  	"media_avatar_id" uuid,
  	"media_secondary_image_id" uuid,
  	"media_vertical_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_bio_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title_primary" varchar,
  	"title_secondary" varchar,
  	"content" jsonb,
  	"media_avatar_id" uuid,
  	"media_secondary_image_id" uuid,
  	"media_vertical_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_bio_block" ADD CONSTRAINT "pages_blocks_bio_block_media_avatar_id_media_id_fk" FOREIGN KEY ("media_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_bio_block" ADD CONSTRAINT "pages_blocks_bio_block_media_secondary_image_id_media_id_fk" FOREIGN KEY ("media_secondary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_bio_block" ADD CONSTRAINT "pages_blocks_bio_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_bio_block" ADD CONSTRAINT "_pages_v_blocks_bio_block_media_avatar_id_media_id_fk" FOREIGN KEY ("media_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_bio_block" ADD CONSTRAINT "_pages_v_blocks_bio_block_media_secondary_image_id_media_id_fk" FOREIGN KEY ("media_secondary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_bio_block" ADD CONSTRAINT "_pages_v_blocks_bio_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_bio_block_order_idx" ON "pages_blocks_bio_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_bio_block_parent_id_idx" ON "pages_blocks_bio_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_bio_block_path_idx" ON "pages_blocks_bio_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_bio_block_media_media_avatar_idx" ON "pages_blocks_bio_block" USING btree ("media_avatar_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_bio_block_media_media_secondary_image_idx" ON "pages_blocks_bio_block" USING btree ("media_secondary_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_bio_block_order_idx" ON "_pages_v_blocks_bio_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_bio_block_parent_id_idx" ON "_pages_v_blocks_bio_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_bio_block_path_idx" ON "_pages_v_blocks_bio_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_bio_block_media_media_avatar_idx" ON "_pages_v_blocks_bio_block" USING btree ("media_avatar_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_bio_block_media_media_secondary_image_idx" ON "_pages_v_blocks_bio_block" USING btree ("media_secondary_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_bio_block" CASCADE;
  DROP TABLE "_pages_v_blocks_bio_block" CASCADE;`)
}
