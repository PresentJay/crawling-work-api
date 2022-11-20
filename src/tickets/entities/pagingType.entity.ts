import { PagingType } from '@prisma/client';
import { PageMiningMetadataEntity } from './pageMiningMetadata.entity';

export class PagingTypeEntity implements PagingType {
  name: string;
  description: string | null;
  PageMiningMetadata?: PageMiningMetadataEntity[];
}
