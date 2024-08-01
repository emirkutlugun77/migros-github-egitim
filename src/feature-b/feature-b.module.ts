import { Module } from '@nestjs/common';
import { FeatureBService } from './feature-b.service';
import { FeatureBController } from './feature-b.controller';

@Module({
  controllers: [FeatureBController],
  providers: [FeatureBService],
})
export class FeatureBModule {}
