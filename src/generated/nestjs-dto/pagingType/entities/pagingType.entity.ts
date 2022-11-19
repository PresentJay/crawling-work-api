import { PageMiningMetadata } from '../../pageMiningMetadata/entities/pageMiningMetadata.entity';

export class PagingType {
  name: string;
  description: string | null;
  PageMiningMetadata?: PageMiningMetadata[];
}
