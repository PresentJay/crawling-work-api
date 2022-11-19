import { Ticket } from '../../ticket/entities/ticket.entity';
import { SubTicket } from '../../subTicket/entities/subTicket.entity';

export class ContentMiningMetadata {
  id: string;
  selector: string | null;
  testedTime: Date | null;
  testedDurationMills: number | null;
  avgPerPaginationMills: number | null;
  paginationAmount: number | null;
  updatedTime: Date;
  Ticket?: Ticket[];
  SubTicket?: SubTicket[];
}
