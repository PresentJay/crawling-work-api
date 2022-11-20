import { TicketEntity } from './ticket.entity';
import { SubTicketEntity } from './subTicket.entity';
import { PagingTypeEntity } from './pagingType.entity';
import { PageMiningMetadata } from '@prisma/client';

export class PageMiningMetadataEntity implements PageMiningMetadata {
  id: string;
  type?: PagingTypeEntity | null;
  selector: string | null;
  testedTime: Date | null;
  testedDurationMills: number | null;
  avgPerPaginationMills: number | null;
  paginationAmount: number | null;
  updatedTime: Date;
  pagingTypeName: string | null;
  Ticket?: TicketEntity[];
  SubTicket?: SubTicketEntity[];
}
