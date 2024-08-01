import { Test, TestingModule } from '@nestjs/testing';
import { FeatureBService } from './feature-b.service';

describe('FeatureBService', () => {
  let service: FeatureBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeatureBService],
    }).compile();

    service = module.get<FeatureBService>(FeatureBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
