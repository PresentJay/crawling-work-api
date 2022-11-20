import { Prisma } from '@prisma/client';
export class WorkEntity {
  id: string;
  title: string;
  objectCount: number;
  avgAccuracyThreshold: Prisma.Decimal;
  failureThreshold: Prisma.Decimal;
  createdTime: Date;
  updatedTime: Date;
}
