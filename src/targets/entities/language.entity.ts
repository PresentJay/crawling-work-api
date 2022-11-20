import { ApiProperty } from '@nestjs/swagger';
import { Language } from '@prisma/client';

export class LanguageEntity implements Language {
  @ApiProperty()
  korean: string;

  @ApiProperty()
  code: string | null;

  @ApiProperty()
  english: string | null;
}
