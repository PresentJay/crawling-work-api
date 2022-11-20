import { DataProcessingStrategy } from '../../dataProcessingStrategy/entities/dataProcessingStrategy.entity';
import { ContentScrapingMetadata } from '../../contentScrapingMetadata/entities/contentScrapingMetadata.entity';

export class DataProcessigMetadata {
  id: string;
  strategy?: DataProcessingStrategy;
  args: string[];
  updatedTime: Date;
  dataProcessingStrategyName: string;
  ContentScrapingMetadata?: ContentScrapingMetadata | null;
  contentScrapingMetadataId: string | null;
}
