import { Test, TestingModule } from '@nestjs/testing';
import { UsersMeasurementsService } from './users-measurements.service';

describe('UsersMeasurementsService', () => {
  let service: UsersMeasurementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersMeasurementsService],
    }).compile();

    service = module.get<UsersMeasurementsService>(UsersMeasurementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
