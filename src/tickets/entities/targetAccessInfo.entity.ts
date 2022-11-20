import { TargetEntity } from 'src/targets/entities/target.entity';
import { TicketEntity } from './ticket.entity';

export class TargetAccessInfoEntity {
  id: string;
  target?: TargetEntity;
  accessingTicket?: TicketEntity;
  accessedTime: Date;
  redirectedUrl: string | null;
  accessedTimeoutMax: number;
  accessStatus: string | null;
  accessStatusMessage: string | null;
  certProtocol: string | null;
  certIssuer: string | null;
  certSubject: string | null;
  targetPid: number;
  ticketId: string;
}
