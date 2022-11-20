import { TicketEntity } from './ticket.entity';
import { SubTicketEntity } from './subTicket.entity';

export class ContentMiningMetadataEntity {
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
