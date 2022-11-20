import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { UserWorkEntity } from './entities/userWork.entity';
import { CreateUserWorkDto } from './dto/create-userWork.dto';
import { UpdateUserWorkDto } from './dto/update-userWork.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Get(':id/works')
  @ApiOkResponse({ type: UserWorkEntity, isArray: true })
  findUserWork(@Param('id') id: string) {
    return this.usersService.findUserWork(id);
  }

  @Post(':id/works')
  @ApiCreatedResponse({ type: UserWorkEntity })
  createUserWork(@Body() createUserWorkDto: CreateUserWorkDto) {
    return this.usersService.createUserWork(createUserWorkDto);
  }

  @Patch('works/:id')
  updateUserWork(
    @Param('id') id: string,
    @Body() updateUserWorkDto: UpdateUserWorkDto,
  ) {
    return this.usersService.updateUserWork(id, updateUserWorkDto);
  }

  @Delete('works/:id')
  deleteUserWork(@Param('id') id: string) {
    return this.usersService.deleteUserWork(id);
  }
}
