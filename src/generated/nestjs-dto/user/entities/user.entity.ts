import { UserWork } from '../../userWork/entities/userWork.entity';
import { Target } from '../../target/entities/target.entity';
import { Ticket } from '../../ticket/entities/ticket.entity';

export class User {
  id: string;
  name: string;
  createdTime: Date;
  updatedTime: Date;
  UserWork?: UserWork[];
  Target?: Target[];
  Ticket?: Ticket[];
}
