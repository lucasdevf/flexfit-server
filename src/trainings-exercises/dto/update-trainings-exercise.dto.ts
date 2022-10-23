import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingsExerciseDto } from './create-trainings-exercise.dto';

export class UpdateTrainingsExerciseDto extends PartialType(CreateTrainingsExerciseDto) {}
