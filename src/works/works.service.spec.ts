import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { WorksService } from './works.service';

describe('WorksService', () => {
  let service: WorksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorksService, PrismaService],
    }).compile();

    service = module.get<WorksService>(WorksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
