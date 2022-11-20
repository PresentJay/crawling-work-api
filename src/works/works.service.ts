import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

@Injectable()
export class WorksService {
  constructor(private prisma: PrismaService) {}

  create(createWorkDto: CreateWorkDto) {
    return this.prisma.work.create({ data: createWorkDto });
  }

  findAll() {
    return this.prisma.work.findMany();
  }

  findOne(id: string) {
    return this.prisma.work.findUnique({ where: { id } });
  }

  update(id: string, updateWorkDto: UpdateWorkDto) {
    return this.prisma.work.update({
      where: { id },
      data: updateWorkDto,
    });
  }

  remove(id: string) {
    return this.prisma.work.delete({ where: { id } });
  }
}
