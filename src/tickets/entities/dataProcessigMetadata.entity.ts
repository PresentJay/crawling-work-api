import { DataProcessingStrategyEntity } from './dataProcessingStrategy.entity';
import { ContentScrapingMetadataEntity } from './contentScrapingMetadata.entity';

export class DataProcessigMetadataEntity {
  id: string;
  strategy?: DataProcessingStrategyEntity;
  args: string[];
  updatedTime: Date;
  dataProcessingStrategyId: string;
  ContentScrapingMetadata?: ContentScrapingMetadataEntity | null;
  contentScrapingMetadataId: string | null;
}
