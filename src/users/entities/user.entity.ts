import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { TargetEntity } from '../../targets/entities/target.entity';
import { TicketEntity } from '../../tickets/entities/ticket.entity';
import { UserWorkEntity } from './userWork.entity';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdTime: Date;

  @ApiProperty()
  updatedTime: Date;

  UserWork?: UserWorkEntity[];
  Target?: TargetEntity[];
  Ticket?: TicketEntity[];
}
