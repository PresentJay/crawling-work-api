import { CountryEntity } from './country.entity';
import { LanguageEntity } from './language.entity';
import { CategoryEntity } from './category.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { Target } from '@prisma/client';
import { TargetAccessInfoEntity } from '../../tickets/entities/targetAccessInfo.entity';
import { ApiProperty } from '@nestjs/swagger';

export class TargetEntity implements Target {
  @ApiProperty()
  pid: number;

  @ApiProperty()
  required: boolean;

  @ApiProperty()
  disabled: boolean;

  @ApiProperty()
  disabledNote: string | null;

  @ApiProperty()
  url: string;

  @ApiProperty()
  rank: number | null;

  @ApiProperty()
  country?: CountryEntity | null;

  @ApiProperty()
  language?: LanguageEntity | null;

  @ApiProperty()
  category?: CategoryEntity | null;

  @ApiProperty()
  assignee?: UserEntity | null;

  @ApiProperty()
  countryKorean: string | null;

  @ApiProperty()
  languageKorean: string | null;

  @ApiProperty()
  categoryId: string | null;

  @ApiProperty()
  createdTime: Date;

  @ApiProperty()
  updatedTime: Date;

  @ApiProperty()
  assigneeId: string | null;

  @ApiProperty()
  TargetAccessInfo?: TargetAccessInfoEntity[];
}
