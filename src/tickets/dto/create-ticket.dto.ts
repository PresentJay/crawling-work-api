import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty()
  targetPid: number;

  @ApiProperty()
  workerId: string;

  @ApiProperty()
  workId: string;
}
