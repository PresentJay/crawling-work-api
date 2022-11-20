import { Module } from '@nestjs/common';
import { TargetsService } from './targets.service';
import { TargetsController } from './targets.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TargetsController],
  providers: [TargetsService],
  imports: [PrismaModule],
})
export class TargetsModule {}
