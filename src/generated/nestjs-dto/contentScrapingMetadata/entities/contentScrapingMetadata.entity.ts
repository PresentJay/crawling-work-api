import { Ticket } from '../../ticket/entities/ticket.entity';
import { SubTicket } from '../../subTicket/entities/subTicket.entity';
import { CrawlingMetadataColumn } from '../../crawlingMetadataColumn/entities/crawlingMetadataColumn.entity';
import { DataProcessigMetadata } from '../../dataProcessigMetadata/entities/dataProcessigMetadata.entity';

export class ContentScrapingMetadata {
  id: string;
  ticket?: Ticket;
  subTicket?: SubTicket | null;
  isSub: boolean;
  column?: CrawlingMetadataColumn;
  selector: string | null;
  dataProcessing?: DataProcessigMetadata[];
  ignore: boolean;
  ticketId: string;
  subTicketId: string | null;
  crawlingMetadataColumnId: string;
}
