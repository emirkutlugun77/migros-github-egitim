import { Test, TestingModule } from '@nestjs/testing';
import { FeatureBController } from './feature-b.controller';
import { FeatureBService } from './feature-b.service';

describe('FeatureBController', () => {
  let controller: FeatureBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeatureBController],
      providers: [FeatureBService],
    }).compile();

    controller = module.get<FeatureBController>(FeatureBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
