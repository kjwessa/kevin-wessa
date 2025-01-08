import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_content_beta_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_beta_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_beta_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_beta_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_beta_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_beta_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_beta_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_beta_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_beta_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_beta_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_beta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_beta_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"size" "enum__pages_v_blocks_content_beta_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_beta_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_beta_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_beta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_beta_columns" ADD CONSTRAINT "pages_blocks_content_beta_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_beta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_beta" ADD CONSTRAINT "pages_blocks_content_beta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_beta_columns" ADD CONSTRAINT "_pages_v_blocks_content_beta_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_beta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_beta" ADD CONSTRAINT "_pages_v_blocks_content_beta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_beta_columns_order_idx" ON "pages_blocks_content_beta_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_beta_columns_parent_id_idx" ON "pages_blocks_content_beta_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_beta_order_idx" ON "pages_blocks_content_beta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_beta_parent_id_idx" ON "pages_blocks_content_beta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_beta_path_idx" ON "pages_blocks_content_beta" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_beta_columns_order_idx" ON "_pages_v_blocks_content_beta_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_beta_columns_parent_id_idx" ON "_pages_v_blocks_content_beta_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_beta_order_idx" ON "_pages_v_blocks_content_beta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_beta_parent_id_idx" ON "_pages_v_blocks_content_beta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_beta_path_idx" ON "_pages_v_blocks_content_beta" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_content_beta_columns" CASCADE;
  DROP TABLE "pages_blocks_content_beta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_beta_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content_beta" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_content_beta_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_beta_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_beta_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_beta_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_beta_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_beta_columns_link_appearance";`)
}
