import { Prisma } from '@prisma/client';

export class CreateCrawlingRunInfoDto {
  startTime: Date;
  durationMills?: number;
  avgPerSuccessMills?: number;
  avgFailMills?: number;
  successRate?: Prisma.Decimal;
  korContentsCount?: number;
}
