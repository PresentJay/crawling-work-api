import { ApiProperty } from '@nestjs/swagger';
import { Prisma, Work } from '@prisma/client';
import { TicketEntity } from '../../tickets/entities/ticket.entity';
import { UserWorkEntity } from '../../users/entities/userWork.entity';
import { CrawlingMetadataTemplateEntity } from './crawlingMetadataTemplate.entity';
export class WorkEntity implements Work {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  objectCount: number;

  @ApiProperty()
  avgAccuracyThreshold: Prisma.Decimal;

  @ApiProperty()
  failureThreshold: Prisma.Decimal;

  @ApiProperty()
  crawlingMetadata?: CrawlingMetadataTemplateEntity | null;

  @ApiProperty()
  createdTime: Date;

  @ApiProperty()
  updatedTime: Date;

  @ApiProperty()
  UserWork?: UserWorkEntity[];

  @ApiProperty()
  crawlingMetadataTemplateId: string | null;

  @ApiProperty()
  Ticket?: TicketEntity[];
}
