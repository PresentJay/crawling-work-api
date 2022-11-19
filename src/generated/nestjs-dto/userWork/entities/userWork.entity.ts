import { User } from '../../user/entities/user.entity';
import { Work } from '../../work/entities/work.entity';

export class UserWork {
  id: string;
  user?: User;
  work?: Work;
  allocated: number;
  successed: number;
  totalSpentMills: number;
  createdTime: Date;
  updatedTime: Date;
  userId: string;
  workId: string;
}
