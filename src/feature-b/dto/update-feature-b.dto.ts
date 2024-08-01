import { PartialType } from '@nestjs/mapped-types';
import { CreateFeatureBDto } from './create-feature-b.dto';

export class UpdateFeatureBDto extends PartialType(CreateFeatureBDto) {}
