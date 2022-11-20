import { TicketEntity } from './ticket.entity';
import { SubTicketEntity } from './subTicket.entity';
import { ContentMiningMetadata } from '@prisma/client';

export class ContentMiningMetadataEntity implements ContentMiningMetadata {
  id: string;
  selector: string | null;
  testedTime: Date | null;
  testedDurationMills: number | null;
  avgPerPaginationMills: number | null;
  paginationAmount: number | null;
  updatedTime: Date;
  Ticket?: TicketEntity[];
  SubTicket?: SubTicketEntity[];
}
