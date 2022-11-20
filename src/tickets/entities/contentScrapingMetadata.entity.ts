import { ContentScrapingMetadata } from '@prisma/client';
import { CrawlingMetadataColumnEntity } from '../../works/entities/crawlingMetadataColumn.entity';
import { DataProcessigMetadataEntity } from './dataProcessigMetadata.entity';
import { SubTicketEntity } from './subTicket.entity';
import { TicketEntity } from './ticket.entity';

export class ContentScrapingMetadataEntity implements ContentScrapingMetadata {
  id: string;
  ticket?: TicketEntity;
  subTicket?: SubTicketEntity | null;
  isSub: boolean;
  column?: CrawlingMetadataColumnEntity;
  selector: string | null;
  dataProcessing?: DataProcessigMetadataEntity[];
  ignore: boolean;
  ticketId: string;
  subTicketId: string | null;
  crawlingMetadataColumnId: string;
}
