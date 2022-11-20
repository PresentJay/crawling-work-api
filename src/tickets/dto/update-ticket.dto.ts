import { PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  ticketStateName: string;
  sampleContentUrl: string;
  pageMiningMetadataId: string;
  contentMiningMetadataId: string;
}
