import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_media_grid_items_aspect_ratio" AS ENUM('auto', '1:1', '3:4', '4:3', '16:9');
  CREATE TYPE "public"."enum_pages_blocks_media_grid_items_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_media_grid_layout" AS ENUM('grid', 'masonry');
  CREATE TYPE "public"."enum__pages_v_blocks_media_grid_items_aspect_ratio" AS ENUM('auto', '1:1', '3:4', '4:3', '16:9');
  CREATE TYPE "public"."enum__pages_v_blocks_media_grid_items_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_media_grid_layout" AS ENUM('grid', 'masonry');
  CREATE TABLE IF NOT EXISTS "pages_blocks_media_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" uuid,
  	"aspect_ratio" "enum_pages_blocks_media_grid_items_aspect_ratio" DEFAULT 'auto',
  	"size" "enum_pages_blocks_media_grid_items_size" DEFAULT 'medium'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_media_grid_layout" DEFAULT 'grid',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"media_id" uuid,
  	"aspect_ratio" "enum__pages_v_blocks_media_grid_items_aspect_ratio" DEFAULT 'auto',
  	"size" "enum__pages_v_blocks_media_grid_items_size" DEFAULT 'medium',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"layout" "enum__pages_v_blocks_media_grid_layout" DEFAULT 'grid',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_grid_items" ADD CONSTRAINT "pages_blocks_media_grid_items_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_grid_items" ADD CONSTRAINT "pages_blocks_media_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_grid" ADD CONSTRAINT "pages_blocks_media_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_grid_items" ADD CONSTRAINT "_pages_v_blocks_media_grid_items_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_grid_items" ADD CONSTRAINT "_pages_v_blocks_media_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_grid" ADD CONSTRAINT "_pages_v_blocks_media_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_grid_items_order_idx" ON "pages_blocks_media_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_grid_items_parent_id_idx" ON "pages_blocks_media_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_grid_items_media_idx" ON "pages_blocks_media_grid_items" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_grid_order_idx" ON "pages_blocks_media_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_grid_parent_id_idx" ON "pages_blocks_media_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_grid_path_idx" ON "pages_blocks_media_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_grid_items_order_idx" ON "_pages_v_blocks_media_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_grid_items_parent_id_idx" ON "_pages_v_blocks_media_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_grid_items_media_idx" ON "_pages_v_blocks_media_grid_items" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_grid_order_idx" ON "_pages_v_blocks_media_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_grid_parent_id_idx" ON "_pages_v_blocks_media_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_grid_path_idx" ON "_pages_v_blocks_media_grid" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_media_grid_items" CASCADE;
  DROP TABLE "pages_blocks_media_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_media_grid_items" CASCADE;
  DROP TABLE "_pages_v_blocks_media_grid" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_media_grid_items_aspect_ratio";
  DROP TYPE "public"."enum_pages_blocks_media_grid_items_size";
  DROP TYPE "public"."enum_pages_blocks_media_grid_layout";
  DROP TYPE "public"."enum__pages_v_blocks_media_grid_items_aspect_ratio";
  DROP TYPE "public"."enum__pages_v_blocks_media_grid_items_size";
  DROP TYPE "public"."enum__pages_v_blocks_media_grid_layout";`)
}
