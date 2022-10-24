import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { TrainingsExercisesService } from 'src/trainings-exercises/trainings-exercises.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Injectable()
export class TrainingsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    @Inject(forwardRef(() => TrainingsExercisesService))
    private trainingsExercisesService: TrainingsExercisesService,
  ) {}

  async create(createTrainingDto: CreateTrainingDto) {
    const userId = createTrainingDto.user_id;

    await this.usersService.findById(userId);

    const { name, weekdays, user_id } = createTrainingDto;

    const training = await this.prisma.trainings.create({
      data: {
        name,
        weekdays,
        user_id,
      },
    });

    const { exercises } = createTrainingDto;

    const trainingExercises = [];

    for await (const exercise of exercises) {
      const exerciseCreated = await this.trainingsExercisesService.create({
        ...exercise,
        training_id: training.id,
      });

      trainingExercises.push(exerciseCreated);
    }

    return {
      ...training,
      exercises: trainingExercises,
    };
  }

  findByUserId(userId: string) {
    return this.prisma.trainings.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  async findById(id: string) {
    const training = await this.prisma.trainings.findFirst({
      where: {
        id,
      },
    });

    if (!training) throw new HttpException('Treino não encontrado.', 404);

    return training;
  }

  async update(id: string, updateTrainingDto: UpdateTrainingDto) {
    await this.findById(id);

    return this.prisma.trainings.update({
      where: {
        id,
      },
      data: updateTrainingDto,
    });
  }

  async remove(id: string) {
    await this.findById(id);

    await this.trainingsExercisesService.deleteByTrainingId(id);

    return this.prisma.trainings.delete({
      where: {
        id,
      },
    });
  }
}
