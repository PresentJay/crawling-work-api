import { Country } from '../../country/entities/country.entity';
import { Language } from '../../language/entities/language.entity';
import { Category } from '../../category/entities/category.entity';
import { User } from '../../user/entities/user.entity';
import { Ticket } from '../../ticket/entities/ticket.entity';
import { TargetAccessInfo } from '../../targetAccessInfo/entities/targetAccessInfo.entity';

export class Target {
  pid: number;
  required: boolean;
  disabled: boolean;
  disabledNote: string | null;
  url: string;
  rank: number | null;
  country?: Country | null;
  language?: Language | null;
  category?: Category | null;
  assignee?: User | null;
  countryKorean: string | null;
  languageKorean: string | null;
  categoryId: string | null;
  createdTime: Date;
  updatedTime: Date;
  assigneeId: string | null;
  Ticket?: Ticket[];
  TargetAccessInfo?: TargetAccessInfo[];
}
