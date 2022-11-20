import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserWorkDto } from './create-userWork.dto';

export class UpdateUserWorkDto extends PartialType(CreateUserWorkDto) {
  @ApiProperty()
  allocated: number;

  @ApiProperty()
  successed: number;

  @ApiProperty()
  paused: number;

  @ApiProperty()
  totalSpentMills: number;
}
