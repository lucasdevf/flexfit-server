import { TrainingsExercise } from '../../trainings-exercises/entities/trainings-exercise.entity';

export class CreateTrainingDto {
  name: string;
  weekdays: number[];
  user_id: string;
  exercises: TrainingsExercise[];
}
