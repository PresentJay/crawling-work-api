import { CrawlingMetadataTemplateEntity } from './crawlingMetadataTemplate.entity';
import { ContentScrapingMetadataEntity } from '../../tickets/entities/contentScrapingMetadata.entity';
import { CrawlingMetadataColumn } from '@prisma/client';

export class CrawlingMetadataColumnEntity implements CrawlingMetadataColumn {
  id: string;
  template?: CrawlingMetadataTemplateEntity;
  name: string;
  description: string | null;
  crawlingMetadataTemplateId: string;
  ContentScrapingMetadata?: ContentScrapingMetadataEntity[];
}
