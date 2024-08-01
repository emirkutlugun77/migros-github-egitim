import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureAModule } from './feature-a/feature-a.module';
import { FeatureBModule } from './feature-b/feature-b.module';

@Module({
  imports: [FeatureAModule, FeatureBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
