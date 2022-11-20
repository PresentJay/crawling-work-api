import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { WorksModule } from './works/works.module';
import { TargetsModule } from './targets/targets.module';

@Module({
  imports: [
    HealthModule,
    UsersModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    WorksModule,
    TargetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
