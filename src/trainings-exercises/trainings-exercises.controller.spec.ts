import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsExercisesController } from './trainings-exercises.controller';
import { TrainingsExercisesService } from './trainings-exercises.service';

describe('TrainingsExercisesController', () => {
  let controller: TrainingsExercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingsExercisesController],
      providers: [TrainingsExercisesService],
    }).compile();

    controller = module.get<TrainingsExercisesController>(TrainingsExercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
