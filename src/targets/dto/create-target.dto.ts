import { ApiProperty } from '@nestjs/swagger';

export class CreateTargetDto {
  @ApiProperty()
  pid: number;

  @ApiProperty()
  required: boolean;

  @ApiProperty()
  url: string;

  @ApiProperty()
  rank?: number;

  @ApiProperty()
  countryKorean: string;

  @ApiProperty()
  languageKorean: string;

  @ApiProperty()
  categoryId: string;
}
