import { ApiProperty } from '@nestjs/swagger';

export class CreateUserWorkDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  workId: string;
}
