/*
  Warnings:

  - You are about to drop the column `languageGroupKorean` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the `LanguageGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Target" DROP CONSTRAINT "Target_languageGroupKorean_fkey";

-- AlterTable
ALTER TABLE "Target" DROP COLUMN "languageGroupKorean",
ADD COLUMN     "languageKorean" TEXT;

-- DropTable
DROP TABLE "LanguageGroup";

-- CreateTable
CREATE TABLE "Language" (
    "korean" TEXT NOT NULL,
    "code" TEXT,
    "english" TEXT,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("korean")
);

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_languageKorean_fkey" FOREIGN KEY ("languageKorean") REFERENCES "Language"("korean") ON DELETE SET NULL ON UPDATE CASCADE;
