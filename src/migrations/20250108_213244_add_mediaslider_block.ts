import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_media_slider_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" uuid,
  	"alt_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"settings_autoplay" boolean DEFAULT true,
  	"settings_loop" boolean DEFAULT true,
  	"settings_speed" numeric DEFAULT 500,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_slider_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"media_id" uuid,
  	"alt_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"settings_autoplay" boolean DEFAULT true,
  	"settings_loop" boolean DEFAULT true,
  	"settings_speed" numeric DEFAULT 500,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_slider_slides" ADD CONSTRAINT "pages_blocks_media_slider_slides_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_slider_slides" ADD CONSTRAINT "pages_blocks_media_slider_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_slider" ADD CONSTRAINT "pages_blocks_media_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_slider_slides" ADD CONSTRAINT "_pages_v_blocks_media_slider_slides_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_slider_slides" ADD CONSTRAINT "_pages_v_blocks_media_slider_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media_slider" ADD CONSTRAINT "_pages_v_blocks_media_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_slider_slides_order_idx" ON "pages_blocks_media_slider_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_slider_slides_parent_id_idx" ON "pages_blocks_media_slider_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_slider_slides_media_idx" ON "pages_blocks_media_slider_slides" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_slider_order_idx" ON "pages_blocks_media_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_slider_parent_id_idx" ON "pages_blocks_media_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_slider_path_idx" ON "pages_blocks_media_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_slider_slides_order_idx" ON "_pages_v_blocks_media_slider_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_slider_slides_parent_id_idx" ON "_pages_v_blocks_media_slider_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_slider_slides_media_idx" ON "_pages_v_blocks_media_slider_slides" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_slider_order_idx" ON "_pages_v_blocks_media_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_slider_parent_id_idx" ON "_pages_v_blocks_media_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_slider_path_idx" ON "_pages_v_blocks_media_slider" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_media_slider_slides" CASCADE;
  DROP TABLE "pages_blocks_media_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_media_slider_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_media_slider" CASCADE;`)
}
