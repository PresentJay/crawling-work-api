import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserWorkDto } from './dto/create-userWork.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserWorkDto } from './dto/update-userWork.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  createUserWork(CreateUserWorkDto: CreateUserWorkDto) {
    return this.prisma.userWork.create({ data: CreateUserWorkDto });
  }

  findUserWork(userId: string) {
    return this.prisma.userWork.findMany({ where: { userId } });
  }

  updateUserWork(id: string, UpdateUserWorkDto: UpdateUserWorkDto) {
    return this.prisma.userWork.update({
      where: { id },
      data: UpdateUserWorkDto,
    });
  }

  deleteUserWork(id: string) {
    return this.prisma.userWork.delete({ where: { id } });
  }
}
