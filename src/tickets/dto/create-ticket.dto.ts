import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty()
  targetPid: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  workId: string;
}
