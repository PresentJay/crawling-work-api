import { ApiProperty } from '@nestjs/swagger';
import { Country } from '@prisma/client';

export class CountryEntity implements Country {
  @ApiProperty()
  korean: string;

  @ApiProperty()
  english: string | null;
}
