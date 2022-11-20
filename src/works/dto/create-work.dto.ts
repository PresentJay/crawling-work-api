import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateWorkDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  objectCount: number;

  @ApiProperty()
  avgAccuracyThreshold: Prisma.Decimal;

  @ApiProperty()
  failureThreshold: Prisma.Decimal;
}
