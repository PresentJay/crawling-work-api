import { Target } from '../../target/entities/target.entity';
import { Ticket } from '../../ticket/entities/ticket.entity';

export class TargetAccessInfo {
  id: string;
  target?: Target;
  accessingTicket?: Ticket;
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
