import { Prisma } from '@prisma/client';

export class CreateWorkDto {
  title: string;
  objectCount: number;
  avgAccuracyThreshold: Prisma.Decimal;
  failureThreshold: Prisma.Decimal;
}
