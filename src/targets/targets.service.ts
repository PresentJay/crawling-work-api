import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';

@Injectable()
export class TargetsService {
  constructor(private prisma: PrismaService) {}

  create(createTargetDto: CreateTargetDto) {
    return this.prisma.target.create({ data: createTargetDto });
  }

  findAll() {
    return this.prisma.target.findMany();
  }

  findOne(pid: number) {
    return this.prisma.target.findUnique({ where: { pid } });
  }

  update(pid: number, updateTargetDto: UpdateTargetDto) {
    return this.prisma.target.update({
      where: { pid },
      data: updateTargetDto,
    });
  }

  remove(pid: number) {
    return this.prisma.target.delete({ where: { pid } });
  }
}
