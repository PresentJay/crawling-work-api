import { Prisma } from '@prisma/client';
import { CrawlingMetadataTemplate } from '../../crawlingMetadataTemplate/entities/crawlingMetadataTemplate.entity';
import { UserWork } from '../../userWork/entities/userWork.entity';
import { Ticket } from '../../ticket/entities/ticket.entity';

export class Work {
  id: string;
  title: string;
  objectCount: number;
  avgAccuracyThreshold: Prisma.Decimal;
  failureThreshold: Prisma.Decimal;
  crawlingMetadata?: CrawlingMetadataTemplate | null;
  createdTime: Date;
  updatedTime: Date;
  UserWork?: UserWork[];
  crawlingMetadataTemplateId: string | null;
  Ticket?: Ticket[];
}
