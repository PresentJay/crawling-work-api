import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TargetsService } from './targets.service';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { TargetEntity } from './entities/target.entity';

@Controller('targets')
@ApiTags('targets')
export class TargetsController {
  constructor(private readonly targetsService: TargetsService) {}

  @Post()
  @ApiCreatedResponse({ type: TargetEntity })
  create(@Body() createTargetDto: CreateTargetDto) {
    return this.targetsService.create(createTargetDto);
  }

  @Get()
  findAll() {
    return this.targetsService.findAll();
  }

  @Get(':pid')
  findOne(@Param('pid') pid: number) {
    return this.targetsService.findOne(pid);
  }

  @Patch(':pid')
  update(@Param('pid') pid: number, @Body() updateTargetDto: UpdateTargetDto) {
    return this.targetsService.update(pid, updateTargetDto);
  }

  @Delete(':pid')
  remove(@Param('pid') pid: number) {
    return this.targetsService.remove(pid);
  }
}
