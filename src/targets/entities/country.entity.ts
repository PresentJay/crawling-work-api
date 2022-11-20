import { ApiProperty } from '@nestjs/swagger';

export class CountryEntity {
  @ApiProperty()
  korean: string;

  @ApiProperty()
  english: string | null;
}
