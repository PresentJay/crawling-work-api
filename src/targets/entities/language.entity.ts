import { ApiProperty } from '@nestjs/swagger';

export class LanguageEntity {
  @ApiProperty()
  korean: string;

  @ApiProperty()
  code: string | null;

  @ApiProperty()
  english: string | null;
}
