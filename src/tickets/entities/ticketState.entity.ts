import { TicketEntity } from './ticket.entity';
import { SubTicketEntity } from './subTicket.entity';
import { TicketState } from '@prisma/client';

export class TicketStateEntity implements TicketState {
  name: string;
  description: string | null;
  Ticket?: TicketEntity[];
  SubTicket?: SubTicketEntity[];
}
