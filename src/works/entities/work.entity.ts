import { ApiProperty } from '@nestjs/swagger';
import { Prisma, Work } from '@prisma/client';
export class WorkEntity implements Work {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  objectCount: number;

  @ApiProperty()
  avgAccuracyThreshold: Prisma.Decimal;

  @ApiProperty()
  failureThreshold: Prisma.Decimal;

  @ApiProperty()
  createdTime: Date;

  @ApiProperty()
  updatedTime: Date;

  @ApiProperty()
  crawlingMetadataTemplateId: string | null;
}
