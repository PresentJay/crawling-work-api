import { DataProcessingStrategy } from '@prisma/client';
import { DataProcessigMetadataEntity } from './dataProcessigMetadata.entity';

export class DataProcessingStrategyEntity implements DataProcessingStrategy {
  id: string;
  name: string;
  description: string | null;
  hasArgs: boolean;
  DataProcessigMetadata?: DataProcessigMetadataEntity[];
}
