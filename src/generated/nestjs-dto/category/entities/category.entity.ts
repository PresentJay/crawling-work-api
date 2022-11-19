import { Target } from '../../target/entities/target.entity';

export class Category {
  id: string;
  korean: string | null;
  Target?: Target[];
}
