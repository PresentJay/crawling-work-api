import { DataProcessigMetadataEntity } from './dataProcessigMetadata.entity';

export class DataProcessingStrategyEntity {
  id: string;
  name: string;
  description: string | null;
  hasArgs: boolean;
  DataProcessigMetadata?: DataProcessigMetadataEntity[];
}
