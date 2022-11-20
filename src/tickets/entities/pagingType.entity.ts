import { PageMiningMetadataEntity } from './pageMiningMetadata.entity';

export class PagingTypeEntity {
  name: string;
  description: string | null;
  PageMiningMetadata?: PageMiningMetadataEntity[];
}
