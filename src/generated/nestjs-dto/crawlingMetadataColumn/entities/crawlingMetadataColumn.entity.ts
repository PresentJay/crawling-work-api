import { CrawlingMetadataTemplate } from '../../crawlingMetadataTemplate/entities/crawlingMetadataTemplate.entity';
import { ContentScrapingMetadata } from '../../contentScrapingMetadata/entities/contentScrapingMetadata.entity';

export class CrawlingMetadataColumn {
  id: string;
  template?: CrawlingMetadataTemplate;
  name: string;
  description: string | null;
  crawlingMetadataTemplateId: string;
  ContentScrapingMetadata?: ContentScrapingMetadata[];
}
