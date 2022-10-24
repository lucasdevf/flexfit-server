import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { TrainingsService } from 'src/trainings/trainings.service';
import { CreateTrainingsExerciseDto } from './dto/create-trainings-exercise.dto';

@Injectable()
export class TrainingsExercisesService {
  constructor(
    @Inject(forwardRef(() => TrainingsService))
    private trainingsService: TrainingsService,
    private prisma: PrismaService,
  ) {}

  async create(createTrainingsExerciseDto: CreateTrainingsExerciseDto) {
    const { training_id } = createTrainingsExerciseDto;

    await this.trainingsService.findById(training_id);

    return this.prisma.trainingsExercises.create({
      data: createTrainingsExerciseDto,
    });
  }

  async deleteByTrainingId(training_id: string) {
    await this.trainingsService.findById(training_id);

    await this.prisma.trainingsExercises.deleteMany({
      where: {
        training_id,
      },
    });
  }
}
