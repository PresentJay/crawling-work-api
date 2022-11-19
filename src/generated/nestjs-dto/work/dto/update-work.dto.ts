import { Prisma } from '@prisma/client';

export class UpdateWorkDto {
  title?: string;
  objectCount?: number;
  avgAccuracyThreshold?: Prisma.Decimal;
  failureThreshold?: Prisma.Decimal;
}
