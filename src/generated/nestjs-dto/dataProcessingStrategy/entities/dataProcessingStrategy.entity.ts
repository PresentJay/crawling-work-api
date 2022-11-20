import { DataProcessigMetadata } from '../../dataProcessigMetadata/entities/dataProcessigMetadata.entity';

export class DataProcessingStrategy {
  name: string;
  description: string | null;
  hasArgs: boolean;
  DataProcessigMetadata?: DataProcessigMetadata[];
}
