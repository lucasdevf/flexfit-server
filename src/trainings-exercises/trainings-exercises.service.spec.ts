import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsExercisesService } from './trainings-exercises.service';

describe('TrainingsExercisesService', () => {
  let service: TrainingsExercisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingsExercisesService],
    }).compile();

    service = module.get<TrainingsExercisesService>(TrainingsExercisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
