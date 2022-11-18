-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdTime" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Work" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "objectCount" INTEGER NOT NULL,
    "avgAccuracyThreshold" DECIMAL(4,2) NOT NULL,
    "failureThreshold" DECIMAL(4,2) NOT NULL,
    "createdTime" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMPTZ NOT NULL,
    "crawlingMetadataTemplateId" UUID NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWork" (
    "id" UUID NOT NULL,
    "allocated" INTEGER NOT NULL DEFAULT 0,
    "successed" INTEGER NOT NULL DEFAULT 0,
    "totalSpentMills" INTEGER NOT NULL DEFAULT 0,
    "createdTime" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMPTZ NOT NULL,
    "userId" TEXT NOT NULL,
    "workId" UUID NOT NULL,

    CONSTRAINT "UserWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrawlingMetadataTemplate" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdTime" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "CrawlingMetadataTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrawlingMetadataColumn" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "crawlingMetadataTemplateId" UUID NOT NULL,

    CONSTRAINT "CrawlingMetadataColumn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "korean" TEXT NOT NULL,
    "english" TEXT,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("korean")
);

-- CreateTable
CREATE TABLE "LanguageGroup" (
    "korean" TEXT NOT NULL,
    "code" TEXT,
    "english" TEXT,

    CONSTRAINT "LanguageGroup_pkey" PRIMARY KEY ("korean")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "korean" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Target" (
    "pid" INTEGER NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "url" TEXT NOT NULL,
    "rank" INTEGER,
    "countryKorean" TEXT,
    "languageGroupKorean" TEXT,
    "categoryId" TEXT,
    "createdTime" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMPTZ NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" UUID NOT NULL,
    "sampleContentUrl" TEXT,
    "createdTime" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMPTZ NOT NULL,
    "targetPid" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "workId" UUID NOT NULL,
    "ticketStateName" TEXT NOT NULL,
    "pageMiningMetadataId" UUID NOT NULL,
    "contentMiningMetadataId" UUID NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketState" (
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "TicketState_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "PagingType" (
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "PagingType_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "PageMiningMetadata" (
    "id" UUID NOT NULL,
    "selector" TEXT,
    "testedTime" TIMESTAMPTZ,
    "testedDurationMills" INTEGER,
    "avgPerPaginationMills" INTEGER,
    "paginationAmount" INTEGER,
    "updatedTime" TIMESTAMPTZ NOT NULL,
    "pagingTypeName" TEXT,

    CONSTRAINT "PageMiningMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentMiningMetadata" (
    "id" UUID NOT NULL,
    "selector" TEXT,
    "testedTime" TIMESTAMPTZ,
    "testedDurationMills" INTEGER,
    "avgPerPaginationMills" INTEGER,
    "paginationAmount" INTEGER,
    "updatedTime" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ContentMiningMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TargetAccessInfo" (
    "id" UUID NOT NULL,
    "accessedTime" TIMESTAMPTZ NOT NULL,
    "redirectedUrl" TEXT,
    "accessedTimeoutMax" INTEGER NOT NULL,
    "accessStatus" TEXT,
    "accessStatusMessage" TEXT,
    "certProtocol" TEXT,
    "certIssuer" TEXT,
    "certSubject" TEXT,
    "targetPid" INTEGER NOT NULL,
    "ticketId" UUID NOT NULL,

    CONSTRAINT "TargetAccessInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTicket" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "sampleContentUrl" TEXT,
    "ticketId" UUID NOT NULL,
    "pageMiningMetadataId" UUID NOT NULL,
    "contentMiningMetadataId" UUID NOT NULL,
    "ticketStateName" TEXT NOT NULL,
    "createdTime" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "SubTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrawlingRunInfo" (
    "id" UUID NOT NULL,
    "isSub" BOOLEAN NOT NULL DEFAULT false,
    "startTime" TIMESTAMPTZ NOT NULL,
    "durationMills" INTEGER,
    "avgPerSuccessMills" INTEGER,
    "avgFailMills" INTEGER,
    "successRate" DECIMAL(65,30),
    "korContentsCount" INTEGER,
    "ticketId" UUID NOT NULL,
    "subTicketId" UUID,

    CONSTRAINT "CrawlingRunInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataProcessingStrategy" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "hasArgs" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "DataProcessingStrategy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataProcessigMetadata" (
    "id" UUID NOT NULL,
    "args" TEXT[],
    "updatedTime" TIMESTAMPTZ NOT NULL,
    "dataProcessingStrategyId" UUID NOT NULL,
    "contentScrapingMetadataId" UUID,

    CONSTRAINT "DataProcessigMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentScrapingMetadata" (
    "id" UUID NOT NULL,
    "isSub" BOOLEAN NOT NULL DEFAULT false,
    "selector" TEXT,
    "ignore" BOOLEAN NOT NULL DEFAULT false,
    "ticketId" UUID NOT NULL,
    "subTicketId" UUID,
    "crawlingMetadataColumnId" UUID NOT NULL,

    CONSTRAINT "ContentScrapingMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Work_title_key" ON "Work"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Target_url_key" ON "Target"("url");

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_crawlingMetadataTemplateId_fkey" FOREIGN KEY ("crawlingMetadataTemplateId") REFERENCES "CrawlingMetadataTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWork" ADD CONSTRAINT "UserWork_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWork" ADD CONSTRAINT "UserWork_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrawlingMetadataColumn" ADD CONSTRAINT "CrawlingMetadataColumn_crawlingMetadataTemplateId_fkey" FOREIGN KEY ("crawlingMetadataTemplateId") REFERENCES "CrawlingMetadataTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_countryKorean_fkey" FOREIGN KEY ("countryKorean") REFERENCES "Country"("korean") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_languageGroupKorean_fkey" FOREIGN KEY ("languageGroupKorean") REFERENCES "LanguageGroup"("korean") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_targetPid_fkey" FOREIGN KEY ("targetPid") REFERENCES "Target"("pid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_ticketStateName_fkey" FOREIGN KEY ("ticketStateName") REFERENCES "TicketState"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_pageMiningMetadataId_fkey" FOREIGN KEY ("pageMiningMetadataId") REFERENCES "PageMiningMetadata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_contentMiningMetadataId_fkey" FOREIGN KEY ("contentMiningMetadataId") REFERENCES "ContentMiningMetadata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageMiningMetadata" ADD CONSTRAINT "PageMiningMetadata_pagingTypeName_fkey" FOREIGN KEY ("pagingTypeName") REFERENCES "PagingType"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TargetAccessInfo" ADD CONSTRAINT "TargetAccessInfo_targetPid_fkey" FOREIGN KEY ("targetPid") REFERENCES "Target"("pid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TargetAccessInfo" ADD CONSTRAINT "TargetAccessInfo_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTicket" ADD CONSTRAINT "SubTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTicket" ADD CONSTRAINT "SubTicket_ticketStateName_fkey" FOREIGN KEY ("ticketStateName") REFERENCES "TicketState"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTicket" ADD CONSTRAINT "SubTicket_pageMiningMetadataId_fkey" FOREIGN KEY ("pageMiningMetadataId") REFERENCES "PageMiningMetadata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTicket" ADD CONSTRAINT "SubTicket_contentMiningMetadataId_fkey" FOREIGN KEY ("contentMiningMetadataId") REFERENCES "ContentMiningMetadata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrawlingRunInfo" ADD CONSTRAINT "CrawlingRunInfo_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrawlingRunInfo" ADD CONSTRAINT "CrawlingRunInfo_subTicketId_fkey" FOREIGN KEY ("subTicketId") REFERENCES "SubTicket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataProcessigMetadata" ADD CONSTRAINT "DataProcessigMetadata_dataProcessingStrategyId_fkey" FOREIGN KEY ("dataProcessingStrategyId") REFERENCES "DataProcessingStrategy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataProcessigMetadata" ADD CONSTRAINT "DataProcessigMetadata_contentScrapingMetadataId_fkey" FOREIGN KEY ("contentScrapingMetadataId") REFERENCES "ContentScrapingMetadata"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentScrapingMetadata" ADD CONSTRAINT "ContentScrapingMetadata_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentScrapingMetadata" ADD CONSTRAINT "ContentScrapingMetadata_subTicketId_fkey" FOREIGN KEY ("subTicketId") REFERENCES "SubTicket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentScrapingMetadata" ADD CONSTRAINT "ContentScrapingMetadata_crawlingMetadataColumnId_fkey" FOREIGN KEY ("crawlingMetadataColumnId") REFERENCES "CrawlingMetadataColumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
