import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorksService } from './works.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WorkEntity } from './entities/work.entity';

@Controller('works')
@ApiTags('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Post()
  @ApiCreatedResponse({ type: WorkEntity })
  create(@Body() createWorkDto: CreateWorkDto) {
    return this.worksService.create(createWorkDto);
  }

  @Get()
  @ApiOkResponse({ type: WorkEntity, isArray: true })
  findAll() {
    return this.worksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: WorkEntity })
  findOne(@Param('id') id: string) {
    return this.worksService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: WorkEntity })
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.worksService.update(id, updateWorkDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: WorkEntity })
  remove(@Param('id') id: string) {
    return this.worksService.remove(id);
  }
}
