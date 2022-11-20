import { TicketEntity } from './ticket.entity';
import { TicketStateEntity } from './ticketState.entity';
import { PageMiningMetadataEntity } from './pageMiningMetadata.entity';
import { ContentMiningMetadataEntity } from './contentMiningMetadata.entity';
import { ContentScrapingMetadataEntity } from './contentScrapingMetadata.entity';
import { CrawlingRunInfoEntity } from './crawlingRunInfo.entity';

export class SubTicketEntity {
  id: string;
  parent?: TicketEntity;
  url: string;
  state?: TicketStateEntity;
  pageMining?: PageMiningMetadataEntity;
  contentMining?: ContentMiningMetadataEntity;
  sampleContentUrl: string | null;
  ticketId: string;
  pageMiningMetadataId: string;
  contentMiningMetadataId: string;
  ticketStateName: string;
  createdTime: Date;
  updatedTime: Date;
  CrawlingRunInfo?: CrawlingRunInfoEntity[];
  ContentScrapingMetadata?: ContentScrapingMetadataEntity[];
}
