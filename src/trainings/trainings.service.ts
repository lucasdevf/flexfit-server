import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Injectable()
export class TrainingsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create(createTrainingDto: CreateTrainingDto) {
    const userId = createTrainingDto.user_id;

    await this.usersService.findById(userId);

    return this.prisma.trainings.create({
      data: createTrainingDto,
    });
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

    return this.prisma.trainings.delete({
      where: {
        id,
      },
    });
  }
}
