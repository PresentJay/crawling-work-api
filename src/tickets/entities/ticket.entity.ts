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
import { ApiProperty } from '@nestjs/swagger';
import { Ticket } from '@prisma/client';

export class TicketEntity implements Ticket {
  @ApiProperty()
  id: string;

  @ApiProperty()
  target?: TargetEntity;

  @ApiProperty()
  worker?: UserEntity;

  @ApiProperty()
  state?: TicketStateEntity;

  @ApiProperty()
  pageMining?: PageMiningMetadataEntity;

  @ApiProperty()
  contentMining?: ContentMiningMetadataEntity;

  @ApiProperty()
  sampleContentUrl: string | null;

  @ApiProperty()
  work?: WorkEntity;

  @ApiProperty()
  createdTime: Date;

  @ApiProperty()
  updatedTime: Date;

  @ApiProperty()
  targetPid: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  workId: string;

  @ApiProperty()
  ticketStateName: string;

  @ApiProperty()
  pageMiningMetadataId: string;

  @ApiProperty()
  contentMiningMetadataId: string;

  @ApiProperty()
  TargetAccessInfo?: TargetAccessInfoEntity[];

  @ApiProperty()
  SubTicket?: SubTicketEntity[];

  @ApiProperty()
  CrawlingRunInfo?: CrawlingRunInfoEntity[];

  @ApiProperty()
  ContentScrapingMetadata?: ContentScrapingMetadataEntity[];
}
