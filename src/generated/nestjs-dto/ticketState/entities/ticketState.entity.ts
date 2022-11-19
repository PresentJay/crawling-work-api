import { Ticket } from '../../ticket/entities/ticket.entity';
import { SubTicket } from '../../subTicket/entities/subTicket.entity';

export class TicketState {
  name: string;
  description: string | null;
  Ticket?: Ticket[];
  SubTicket?: SubTicket[];
}
