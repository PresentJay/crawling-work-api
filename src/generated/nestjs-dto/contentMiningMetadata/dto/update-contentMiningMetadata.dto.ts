export class UpdateContentMiningMetadataDto {
  selector?: string;
  testedTime?: Date;
  testedDurationMills?: number;
  avgPerPaginationMills?: number;
  paginationAmount?: number;
}
