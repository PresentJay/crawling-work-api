import { TicketStateEntity } from './ticketState.entity';
import { WorkEntity } from '../../works/entities/work.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { TargetEntity } from 'src/targets/entities/target.entity';
import { PageMiningMetadataEntity } from './pageMiningMetadata.entity';
import { ContentMiningMetadataEntity } from './contentMiningMetadata.entity';
import { SubTicketEntity } from './subTicket.entity';
import { CrawlingRunInfoEntity } from './crawlingRunInfo.entity';
import { ContentScrapingMetadataEntity } from './contentScrapingMetadata.entity';
import { TargetAccessInfoEntity } from './targetAccessInfo.entity';

export class TicketEntity {
  id: string;
  target?: TargetEntity;
  worker?: UserEntity;
  state?: TicketStateEntity;
  pageMining?: PageMiningMetadataEntity;
  contentMining?: ContentMiningMetadataEntity;
  sampleContentUrl: string | null;
  work?: WorkEntity;
  createdTime: Date;
  updatedTime: Date;
  targetPid: number;
  userId: string;
  workId: string;
  ticketStateName: string;
  pageMiningMetadataId: string;
  contentMiningMetadataId: string;
  TargetAccessInfo?: TargetAccessInfoEntity[];
  SubTicket?: SubTicketEntity[];
  CrawlingRunInfo?: CrawlingRunInfoEntity[];
  ContentScrapingMetadata?: ContentScrapingMetadataEntity[];
}
