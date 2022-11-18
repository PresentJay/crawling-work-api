-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_crawlingMetadataTemplateId_fkey";

-- AlterTable
ALTER TABLE "Work" ALTER COLUMN "crawlingMetadataTemplateId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_crawlingMetadataTemplateId_fkey" FOREIGN KEY ("crawlingMetadataTemplateId") REFERENCES "CrawlingMetadataTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
