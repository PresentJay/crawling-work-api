import { DataProcessingStrategyEntity } from './dataProcessingStrategy.entity';
import { ContentScrapingMetadataEntity } from './contentScrapingMetadata.entity';
import { DataProcessigMetadata } from '@prisma/client';

export class DataProcessigMetadataEntity implements DataProcessigMetadata {
  id: string;
  strategy?: DataProcessingStrategyEntity;
  args: string[];
  updatedTime: Date;
  dataProcessingStrategyName: string;
  ContentScrapingMetadata?: ContentScrapingMetadataEntity | null;
  contentScrapingMetadataId: string | null;
}
