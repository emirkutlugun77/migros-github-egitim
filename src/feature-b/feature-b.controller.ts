import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeatureBService } from './feature-b.service';
import { CreateFeatureBDto } from './dto/create-feature-b.dto';
import { UpdateFeatureBDto } from './dto/update-feature-b.dto';

@Controller('feature-b')
export class FeatureBController {
  constructor(private readonly featureBService: FeatureBService) {}

  @Post()
  create(@Body() createFeatureBDto: CreateFeatureBDto) {
    return this.featureBService.create(createFeatureBDto);
  }

  @Get()
  findAll() {
    return this.featureBService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.featureBService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeatureBDto: UpdateFeatureBDto) {
    return this.featureBService.update(+id, updateFeatureBDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featureBService.remove(+id);
  }
}
