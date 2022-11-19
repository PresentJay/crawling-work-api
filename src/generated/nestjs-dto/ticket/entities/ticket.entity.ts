import { Target } from '../../target/entities/target.entity';
import { User } from '../../user/entities/user.entity';
import { TicketState } from '../../ticketState/entities/ticketState.entity';
import { PageMiningMetadata } from '../../pageMiningMetadata/entities/pageMiningMetadata.entity';
import { ContentMiningMetadata } from '../../contentMiningMetadata/entities/contentMiningMetadata.entity';
import { Work } from '../../work/entities/work.entity';
import { TargetAccessInfo } from '../../targetAccessInfo/entities/targetAccessInfo.entity';
import { SubTicket } from '../../subTicket/entities/subTicket.entity';
import { CrawlingRunInfo } from '../../crawlingRunInfo/entities/crawlingRunInfo.entity';
import { ContentScrapingMetadata } from '../../contentScrapingMetadata/entities/contentScrapingMetadata.entity';

export class Ticket {
  id: string;
  target?: Target;
  worker?: User;
  state?: TicketState;
  pageMining?: PageMiningMetadata;
  contentMining?: ContentMiningMetadata;
  sampleContentUrl: string | null;
  work?: Work;
  createdTime: Date;
  updatedTime: Date;
  targetPid: number;
  userId: string;
  workId: string;
  ticketStateName: string;
  pageMiningMetadataId: string;
  contentMiningMetadataId: string;
  TargetAccessInfo?: TargetAccessInfo[];
  SubTicket?: SubTicket[];
  CrawlingRunInfo?: CrawlingRunInfo[];
  ContentScrapingMetadata?: ContentScrapingMetadata[];
}
