import { Injectable } from '@nestjs/common';
import { CreateFeatureBDto } from './dto/create-feature-b.dto';
import { UpdateFeatureBDto } from './dto/update-feature-b.dto';

@Injectable()
export class FeatureBService {
  create(createFeatureBDto: CreateFeatureBDto) {
    return 'This action adds a new featureB';
  }

  findAll() {
    return `This action returns all featureB`;
  }

  findOne(id: number) {
    return `This action returns a #${id} featureB`;
  }

  update(id: number, updateFeatureBDto: UpdateFeatureBDto) {
    return `This action updates a #${id} featureB`;
  }

  remove(id: number) {
    return `This action removes a #${id} featureB`;
  }
}
