-- AlterTable
ALTER TABLE "Target" ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "disabledNote" TEXT;
