import { Prisma } from '@prisma/client';
import { SubTicketEntity } from './subTicket.entity';
import { TicketEntity } from './ticket.entity';

export class CrawlingRunInfoEntity {
  id: string;
  ticket?: TicketEntity;
  subTicket?: SubTicketEntity | null;
  isSub: boolean;
  startTime: Date;
  durationMills: number | null;
  avgPerSuccessMills: number | null;
  avgFailMills: number | null;
  successRate: Prisma.Decimal | null;
  korContentsCount: number | null;
  ticketId: string;
  subTicketId: string | null;
}
