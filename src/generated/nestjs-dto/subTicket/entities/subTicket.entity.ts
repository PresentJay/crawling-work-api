import { Ticket } from '../../ticket/entities/ticket.entity';
import { TicketState } from '../../ticketState/entities/ticketState.entity';
import { PageMiningMetadata } from '../../pageMiningMetadata/entities/pageMiningMetadata.entity';
import { ContentMiningMetadata } from '../../contentMiningMetadata/entities/contentMiningMetadata.entity';
import { CrawlingRunInfo } from '../../crawlingRunInfo/entities/crawlingRunInfo.entity';
import { ContentScrapingMetadata } from '../../contentScrapingMetadata/entities/contentScrapingMetadata.entity';

export class SubTicket {
  id: string;
  parent?: Ticket;
  url: string;
  state?: TicketState;
  pageMining?: PageMiningMetadata;
  contentMining?: ContentMiningMetadata;
  sampleContentUrl: string | null;
  ticketId: string;
  pageMiningMetadataId: string;
  contentMiningMetadataId: string;
  ticketStateName: string;
  createdTime: Date;
  updatedTime: Date;
  CrawlingRunInfo?: CrawlingRunInfo[];
  ContentScrapingMetadata?: ContentScrapingMetadata[];
}
