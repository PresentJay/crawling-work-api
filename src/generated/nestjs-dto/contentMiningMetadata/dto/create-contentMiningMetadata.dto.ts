export class CreateContentMiningMetadataDto {
  selector?: string;
  testedTime?: Date;
  testedDurationMills?: number;
  avgPerPaginationMills?: number;
  paginationAmount?: number;
}
