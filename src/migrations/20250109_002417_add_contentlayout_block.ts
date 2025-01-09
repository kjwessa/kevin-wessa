import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_content_layout_items_type" AS ENUM('richText', 'media', 'title', 'grid', 'cta');
  CREATE TYPE "public"."enum_pages_blocks_content_layout_items_width" AS ENUM('full', 'half', 'third', 'twoThirds');
  CREATE TYPE "public"."enum_pages_blocks_content_layout_items_data_cta_to_type" AS ENUM('ref', 'url');
  CREATE TYPE "public"."enum_pages_blocks_content_layout_structure_container" AS ENUM('default', 'card');
  CREATE TYPE "public"."enum_pages_blocks_content_layout_theme_bg" AS ENUM('light', 'dark', 'primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_content_layout_space_top" AS ENUM('none', 'xsmall', 'small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum_pages_blocks_content_layout_space_bottom" AS ENUM('none', 'xsmall', 'small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum__pages_v_blocks_content_layout_items_type" AS ENUM('richText', 'media', 'title', 'grid', 'cta');
  CREATE TYPE "public"."enum__pages_v_blocks_content_layout_items_width" AS ENUM('full', 'half', 'third', 'twoThirds');
  CREATE TYPE "public"."enum__pages_v_blocks_content_layout_items_data_cta_to_type" AS ENUM('ref', 'url');
  CREATE TYPE "public"."enum__pages_v_blocks_content_layout_structure_container" AS ENUM('default', 'card');
  CREATE TYPE "public"."enum__pages_v_blocks_content_layout_theme_bg" AS ENUM('light', 'dark', 'primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_content_layout_space_top" AS ENUM('none', 'xsmall', 'small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum__pages_v_blocks_content_layout_space_bottom" AS ENUM('none', 'xsmall', 'small', 'medium', 'large', 'xlarge');
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_layout_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_content_layout_items_type" DEFAULT 'richText',
  	"width" "enum_pages_blocks_content_layout_items_width" DEFAULT 'full',
  	"data_rich_text" jsonb,
  	"data_media_id" uuid,
  	"data_title" varchar,
  	"data_cta_text" varchar,
  	"data_cta_to_type" "enum_pages_blocks_content_layout_items_data_cta_to_type" DEFAULT 'ref',
  	"data_cta_to_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"structure_container" "enum_pages_blocks_content_layout_structure_container" DEFAULT 'default',
  	"theme_bg" "enum_pages_blocks_content_layout_theme_bg" DEFAULT 'light',
  	"space_top" "enum_pages_blocks_content_layout_space_top" DEFAULT 'large',
  	"space_bottom" "enum_pages_blocks_content_layout_space_bottom" DEFAULT 'large',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_layout_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"type" "enum__pages_v_blocks_content_layout_items_type" DEFAULT 'richText',
  	"width" "enum__pages_v_blocks_content_layout_items_width" DEFAULT 'full',
  	"data_rich_text" jsonb,
  	"data_media_id" uuid,
  	"data_title" varchar,
  	"data_cta_text" varchar,
  	"data_cta_to_type" "enum__pages_v_blocks_content_layout_items_data_cta_to_type" DEFAULT 'ref',
  	"data_cta_to_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"structure_container" "enum__pages_v_blocks_content_layout_structure_container" DEFAULT 'default',
  	"theme_bg" "enum__pages_v_blocks_content_layout_theme_bg" DEFAULT 'light',
  	"space_top" "enum__pages_v_blocks_content_layout_space_top" DEFAULT 'large',
  	"space_bottom" "enum__pages_v_blocks_content_layout_space_bottom" DEFAULT 'large',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_layout_items" ADD CONSTRAINT "pages_blocks_content_layout_items_data_media_id_media_id_fk" FOREIGN KEY ("data_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_layout_items" ADD CONSTRAINT "pages_blocks_content_layout_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_layout"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_layout" ADD CONSTRAINT "pages_blocks_content_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_layout_items" ADD CONSTRAINT "_pages_v_blocks_content_layout_items_data_media_id_media_id_fk" FOREIGN KEY ("data_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_layout_items" ADD CONSTRAINT "_pages_v_blocks_content_layout_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_layout"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_layout" ADD CONSTRAINT "_pages_v_blocks_content_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_layout_items_order_idx" ON "pages_blocks_content_layout_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_layout_items_parent_id_idx" ON "pages_blocks_content_layout_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_layout_items_data_data_media_idx" ON "pages_blocks_content_layout_items" USING btree ("data_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_layout_order_idx" ON "pages_blocks_content_layout" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_layout_parent_id_idx" ON "pages_blocks_content_layout" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_layout_path_idx" ON "pages_blocks_content_layout" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_layout_items_order_idx" ON "_pages_v_blocks_content_layout_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_layout_items_parent_id_idx" ON "_pages_v_blocks_content_layout_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_layout_items_data_data_media_idx" ON "_pages_v_blocks_content_layout_items" USING btree ("data_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_layout_order_idx" ON "_pages_v_blocks_content_layout" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_layout_parent_id_idx" ON "_pages_v_blocks_content_layout" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_layout_path_idx" ON "_pages_v_blocks_content_layout" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_content_layout_items" CASCADE;
  DROP TABLE "pages_blocks_content_layout" CASCADE;
  DROP TABLE "_pages_v_blocks_content_layout_items" CASCADE;
  DROP TABLE "_pages_v_blocks_content_layout" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_content_layout_items_type";
  DROP TYPE "public"."enum_pages_blocks_content_layout_items_width";
  DROP TYPE "public"."enum_pages_blocks_content_layout_items_data_cta_to_type";
  DROP TYPE "public"."enum_pages_blocks_content_layout_structure_container";
  DROP TYPE "public"."enum_pages_blocks_content_layout_theme_bg";
  DROP TYPE "public"."enum_pages_blocks_content_layout_space_top";
  DROP TYPE "public"."enum_pages_blocks_content_layout_space_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_content_layout_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_layout_items_width";
  DROP TYPE "public"."enum__pages_v_blocks_content_layout_items_data_cta_to_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_layout_structure_container";
  DROP TYPE "public"."enum__pages_v_blocks_content_layout_theme_bg";
  DROP TYPE "public"."enum__pages_v_blocks_content_layout_space_top";
  DROP TYPE "public"."enum__pages_v_blocks_content_layout_space_bottom";`)
}
