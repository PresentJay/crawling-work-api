import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  @ApiProperty()
  ticketStateName: string;

  @ApiProperty()
  sampleContentUrl: string;

  @ApiProperty()
  pageMiningMetadataId: string;

  @ApiProperty()
  contentMiningMetadataId: string;
}
