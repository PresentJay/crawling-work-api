import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  create(createTicketDto: CreateTicketDto) {
    const pageMiningId = this.prisma.pageMiningMetadata.create({
      data: {},
    });
    const contentMiningId = this.prisma.contentMiningMetadata.create({
      data: {},
    });
    const CrawlingMetadata = this.prisma.work.findUnique({
      where: { id: createTicketDto.workId },
      select: {
        crawlingMetadata: true,
      },
    });

    return this.prisma.ticket.create({ data: createTicketDto });
  }

  findAll() {
    return this.prisma.ticket.findMany();
  }

  findOne(id: string) {
    return this.prisma.ticket.findUnique({ where: { id } });
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { id },
      data: updateTicketDto,
    });
  }

  remove(id: string) {
    return this.prisma.ticket.delete({ where: { id } });
  }
}
