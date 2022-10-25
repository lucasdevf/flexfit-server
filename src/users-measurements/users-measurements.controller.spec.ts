import { Test, TestingModule } from '@nestjs/testing';
import { UsersMeasurementsController } from './users-measurements.controller';
import { UsersMeasurementsService } from './users-measurements.service';

describe('UsersMeasurementsController', () => {
  let controller: UsersMeasurementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersMeasurementsController],
      providers: [UsersMeasurementsService],
    }).compile();

    controller = module.get<UsersMeasurementsController>(UsersMeasurementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
