import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Injectable()
export class GoalsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create(createGoalDto: CreateGoalDto) {
    const { user_id, deadline } = createGoalDto;

    await this.usersService.findById(user_id);

    return this.prisma.goals.create({
      data: { ...createGoalDto, deadline: new Date(deadline) },
    });
  }

  findByUserId(user_id: string) {
    return this.prisma.goals.findMany({
      where: {
        user_id,
      },
    });
  }

  async update(updateGoalDto: UpdateGoalDto, user_id: string) {
    const { id, deadline } = updateGoalDto;

    const goalExists = await this.prisma.goals.findUnique({
      where: {
        id,
      },
    });

    if (!goalExists) throw new HttpException('Meta não encontrada.', 404);

    if (goalExists.user_id !== user_id)
      throw new HttpException('Não autorizado', 401);

    return this.prisma.goals.update({
      where: {
        id,
      },
      data: { ...updateGoalDto, deadline: new Date(deadline) },
    });
  }
}
