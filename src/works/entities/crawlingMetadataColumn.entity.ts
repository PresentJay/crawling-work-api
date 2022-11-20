import { CrawlingMetadataTemplateEntity } from './crawlingMetadataTemplate.entity';
import { ContentScrapingMetadataEntity } from '../../tickets/entities/contentScrapingMetadata.entity';

export class CrawlingMetadataColumnEntity {
  id: string;
  template?: CrawlingMetadataTemplateEntity;
  name: string;
  description: string | null;
  crawlingMetadataTemplateId: string;
  ContentScrapingMetadata?: ContentScrapingMetadataEntity[];
}
