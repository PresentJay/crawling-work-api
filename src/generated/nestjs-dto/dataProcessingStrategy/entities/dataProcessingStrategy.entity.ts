import { DataProcessigMetadata } from '../../dataProcessigMetadata/entities/dataProcessigMetadata.entity';

export class DataProcessingStrategy {
  id: string;
  name: string;
  description: string | null;
  hasArgs: boolean;
  DataProcessigMetadata?: DataProcessigMetadata[];
}
