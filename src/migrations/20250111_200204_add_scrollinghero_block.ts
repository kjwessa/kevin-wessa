import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_scrolling_hero_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_scrolling_hero_theme" AS ENUM('light', 'dark');
  CREATE TABLE IF NOT EXISTS "pages_blocks_scrolling_hero_scrolling_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_scrolling_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"theme" "enum_pages_blocks_scrolling_hero_theme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_scrolling_hero_scrolling_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_scrolling_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"theme" "enum__pages_v_blocks_scrolling_hero_theme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_scrolling_hero_scrolling_text" ADD CONSTRAINT "pages_blocks_scrolling_hero_scrolling_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_scrolling_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_scrolling_hero" ADD CONSTRAINT "pages_blocks_scrolling_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_scrolling_hero_scrolling_text" ADD CONSTRAINT "_pages_v_blocks_scrolling_hero_scrolling_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_scrolling_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_scrolling_hero" ADD CONSTRAINT "_pages_v_blocks_scrolling_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_scrolling_hero_scrolling_text_order_idx" ON "pages_blocks_scrolling_hero_scrolling_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_scrolling_hero_scrolling_text_parent_id_idx" ON "pages_blocks_scrolling_hero_scrolling_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_scrolling_hero_order_idx" ON "pages_blocks_scrolling_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_scrolling_hero_parent_id_idx" ON "pages_blocks_scrolling_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_scrolling_hero_path_idx" ON "pages_blocks_scrolling_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_scrolling_hero_scrolling_text_order_idx" ON "_pages_v_blocks_scrolling_hero_scrolling_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_scrolling_hero_scrolling_text_parent_id_idx" ON "_pages_v_blocks_scrolling_hero_scrolling_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_scrolling_hero_order_idx" ON "_pages_v_blocks_scrolling_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_scrolling_hero_parent_id_idx" ON "_pages_v_blocks_scrolling_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_scrolling_hero_path_idx" ON "_pages_v_blocks_scrolling_hero" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_scrolling_hero_scrolling_text" CASCADE;
  DROP TABLE "pages_blocks_scrolling_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_scrolling_hero_scrolling_text" CASCADE;
  DROP TABLE "_pages_v_blocks_scrolling_hero" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_scrolling_hero_theme";
  DROP TYPE "public"."enum__pages_v_blocks_scrolling_hero_theme";`)
}
