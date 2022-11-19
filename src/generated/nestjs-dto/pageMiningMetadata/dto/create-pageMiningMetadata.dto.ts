export class CreatePageMiningMetadataDto {
  selector?: string;
  testedTime?: Date;
  testedDurationMills?: number;
  avgPerPaginationMills?: number;
  paginationAmount?: number;
}
