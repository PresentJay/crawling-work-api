import { Prisma } from '@prisma/client';
import { Ticket } from '../../ticket/entities/ticket.entity';
import { SubTicket } from '../../subTicket/entities/subTicket.entity';

export class CrawlingRunInfo {
  id: string;
  ticket?: Ticket;
  subTicket?: SubTicket | null;
  isSub: boolean;
  isLocal: boolean;
  startTime: Date;
  durationMills: number | null;
  avgPerSuccessMills: number | null;
  avgFailMills: number | null;
  successRate: Prisma.Decimal | null;
  korContentsCount: number | null;
  ticketId: string;
  subTicketId: string | null;
}
