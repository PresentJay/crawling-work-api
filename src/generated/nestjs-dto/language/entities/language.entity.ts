import { Target } from '../../target/entities/target.entity';

export class Language {
  korean: string;
  code: string | null;
  english: string | null;
  Target?: Target[];
}
