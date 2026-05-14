import {
  type MigrateDownArgs,
  type MigrateUpArgs,
  sql,
} from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_education_degree_type" AS ENUM('bacharelado', 'licenciatura', 'tecnologo');
  CREATE TABLE "experience" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"company_name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"start_date" timestamp(3) with time zone NOT NULL,
  	"end_date" timestamp(3) with time zone,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "blog_category" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "blog_category" CASCADE;
  ALTER TABLE "blog" DROP CONSTRAINT "blog_author_avatar_id_media_id_fk";
  
  ALTER TABLE "education" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum_education_type";
  CREATE TYPE "public"."enum_education_type" AS ENUM('graduacao', 'pos_graduacao', 'certificacao');
  ALTER TABLE "education" ALTER COLUMN "type" SET DATA TYPE "public"."enum_education_type" USING "type"::"public"."enum_education_type";
  DROP INDEX "blog_author_author_avatar_idx";
  ALTER TABLE "blog" ALTER COLUMN "slug" DROP NOT NULL;
  ALTER TABLE "blog" ALTER COLUMN "content" DROP NOT NULL;
  ALTER TABLE "education" ADD COLUMN "degree_type" "enum_education_degree_type";
  ALTER TABLE "education" ADD COLUMN "start_date" timestamp(3) with time zone;
  ALTER TABLE "education" ADD COLUMN "end_date" timestamp(3) with time zone NOT NULL;
  ALTER TABLE "education" ADD COLUMN "avatar_id" uuid;
  ALTER TABLE "blog" ADD COLUMN "category" "enum_blog_category" NOT NULL;
  ALTER TABLE "blog" ADD COLUMN "description" varchar;
  ALTER TABLE "blog" ADD COLUMN "markdown" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "experience_id" uuid;
  CREATE INDEX "experience_updated_at_idx" ON "experience" USING btree ("updated_at");
  CREATE INDEX "experience_created_at_idx" ON "experience" USING btree ("created_at");
  ALTER TABLE "education" ADD CONSTRAINT "education_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_experience_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "education_avatar_idx" ON "education" USING btree ("avatar_id");
  CREATE INDEX "payload_locked_documents_rels_experience_id_idx" ON "payload_locked_documents_rels" USING btree ("experience_id");
  ALTER TABLE "education" DROP COLUMN "completed_at";
  ALTER TABLE "blog" DROP COLUMN "author_name";
  ALTER TABLE "blog" DROP COLUMN "author_avatar_id";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "blog_category" (
  	"order" integer NOT NULL,
  	"parent_id" uuid NOT NULL,
  	"value" "enum_blog_category",
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  ALTER TABLE "experience" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "experience" CASCADE;
  ALTER TABLE "education" DROP CONSTRAINT "education_avatar_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_experience_fk";
  
  ALTER TABLE "education" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum_education_type";
  CREATE TYPE "public"."enum_education_type" AS ENUM('domain', 'application');
  ALTER TABLE "education" ALTER COLUMN "type" SET DATA TYPE "public"."enum_education_type" USING "type"::"public"."enum_education_type";
  DROP INDEX "education_avatar_idx";
  DROP INDEX "payload_locked_documents_rels_experience_id_idx";
  ALTER TABLE "blog" ALTER COLUMN "slug" SET NOT NULL;
  ALTER TABLE "blog" ALTER COLUMN "content" SET NOT NULL;
  ALTER TABLE "education" ADD COLUMN "completed_at" timestamp(3) with time zone;
  ALTER TABLE "blog" ADD COLUMN "author_name" varchar NOT NULL;
  ALTER TABLE "blog" ADD COLUMN "author_avatar_id" uuid;
  ALTER TABLE "blog_category" ADD CONSTRAINT "blog_category_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "blog_category_order_idx" ON "blog_category" USING btree ("order");
  CREATE INDEX "blog_category_parent_idx" ON "blog_category" USING btree ("parent_id");
  ALTER TABLE "blog" ADD CONSTRAINT "blog_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "blog_author_author_avatar_idx" ON "blog" USING btree ("author_avatar_id");
  ALTER TABLE "education" DROP COLUMN "degree_type";
  ALTER TABLE "education" DROP COLUMN "start_date";
  ALTER TABLE "education" DROP COLUMN "end_date";
  ALTER TABLE "education" DROP COLUMN "avatar_id";
  ALTER TABLE "blog" DROP COLUMN "category";
  ALTER TABLE "blog" DROP COLUMN "description";
  ALTER TABLE "blog" DROP COLUMN "markdown";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "experience_id";
  DROP TYPE "public"."enum_education_degree_type";`)
}
