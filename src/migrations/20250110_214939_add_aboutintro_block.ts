import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_about_intro_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_text" jsonb,
  	"description" varchar,
  	"cta_text" varchar,
  	"cta_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_intro_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"icon" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"main_text" jsonb,
  	"description" varchar,
  	"cta_text" varchar,
  	"cta_link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_intro_grid_items" ADD CONSTRAINT "pages_blocks_about_intro_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_intro"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_intro" ADD CONSTRAINT "pages_blocks_about_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_intro_grid_items" ADD CONSTRAINT "_pages_v_blocks_about_intro_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_intro"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_intro" ADD CONSTRAINT "_pages_v_blocks_about_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_grid_items_order_idx" ON "pages_blocks_about_intro_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_grid_items_parent_id_idx" ON "pages_blocks_about_intro_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_order_idx" ON "pages_blocks_about_intro" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_parent_id_idx" ON "pages_blocks_about_intro" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_path_idx" ON "pages_blocks_about_intro" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_grid_items_order_idx" ON "_pages_v_blocks_about_intro_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_grid_items_parent_id_idx" ON "_pages_v_blocks_about_intro_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_order_idx" ON "_pages_v_blocks_about_intro" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_parent_id_idx" ON "_pages_v_blocks_about_intro" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_path_idx" ON "_pages_v_blocks_about_intro" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_about_intro_grid_items" CASCADE;
  DROP TABLE "pages_blocks_about_intro" CASCADE;
  DROP TABLE "_pages_v_blocks_about_intro_grid_items" CASCADE;
  DROP TABLE "_pages_v_blocks_about_intro" CASCADE;`)
}
