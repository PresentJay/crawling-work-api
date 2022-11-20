import { Country } from './country.entity';
import { Language } from './language.entity';
import { Category } from './category.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { TargetAccessInfo } from './targetAccessInfo.entity';
import { Target } from '@prisma/client';

export class TargetEntity implements Target {
  pid: number;
  required: boolean;
  disabled: boolean;
  disabledNote: string | null;
  url: string;
  rank: number | null;
  country?: Country | null;
  language?: Language | null;
  category?: Category | null;
  assignee?: UserEntity | null;
  countryKorean: string | null;
  languageKorean: string | null;
  categoryId: string | null;
  createdTime: Date;
  updatedTime: Date;
  assigneeId: string | null;
  TargetAccessInfo?: TargetAccessInfo[];
}
