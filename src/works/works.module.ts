import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WorksController],
  providers: [WorksService],
  imports: [PrismaModule],
})
export class WorksModule {}
