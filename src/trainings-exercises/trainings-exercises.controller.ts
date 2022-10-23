import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TrainingsExercisesService } from './trainings-exercises.service';
import { CreateTrainingsExerciseDto } from './dto/create-trainings-exercise.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('trainings-exercises')
export class TrainingsExercisesController {
  constructor(
    private readonly trainingsExercisesService: TrainingsExercisesService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTrainingsExerciseDto: CreateTrainingsExerciseDto) {
    return this.trainingsExercisesService.create(createTrainingsExerciseDto);
  }
}
