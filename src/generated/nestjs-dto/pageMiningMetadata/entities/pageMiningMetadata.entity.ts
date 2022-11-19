import { PagingType } from '../../pagingType/entities/pagingType.entity';
import { Ticket } from '../../ticket/entities/ticket.entity';
import { SubTicket } from '../../subTicket/entities/subTicket.entity';

export class PageMiningMetadata {
  id: string;
  type?: PagingType | null;
  selector: string | null;
  testedTime: Date | null;
  testedDurationMills: number | null;
  avgPerPaginationMills: number | null;
  paginationAmount: number | null;
  updatedTime: Date;
  pagingTypeName: string | null;
  Ticket?: Ticket[];
  SubTicket?: SubTicket[];
}
