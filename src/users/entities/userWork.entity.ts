import { UserEntity } from '../entities/user.entity';
import { WorkEntity } from '../../works/entities/work.entity';
import { UserWork } from '@prisma/client';

export class UserWorkEntity implements UserWork {
  id: string;
  user?: UserEntity;
  work?: WorkEntity;
  allocated: number;
  successed: number;
  totalSpentMills: number;
  createdTime: Date;
  updatedTime: Date;
  userId: string;
  workId: string;
}
