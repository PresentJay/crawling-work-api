export class UpdatePageMiningMetadataDto {
  selector?: string;
  testedTime?: Date;
  testedDurationMills?: number;
  avgPerPaginationMills?: number;
  paginationAmount?: number;
}
