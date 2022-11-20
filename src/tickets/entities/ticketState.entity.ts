import { TicketEntity } from './ticket.entity';
import { SubTicketEntity } from './subTicket.entity';

export class TicketStateEntity {
  name: string;
  description: string | null;
  Ticket?: TicketEntity[];
  SubTicket?: SubTicketEntity[];
}
