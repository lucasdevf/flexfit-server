import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CreateUsersMeasurementDto } from './dto/create-users-measurement.dto';
import { UpdateUsersMeasurementDto } from './dto/update-users-measurement.dto';

@Injectable()
export class UsersMeasurementsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create(createUsersMeasurementDto: CreateUsersMeasurementDto) {
    const { user_id } = createUsersMeasurementDto;

    await this.usersService.findById(user_id);

    return this.prisma.measurements.create({
      data: createUsersMeasurementDto,
    });
  }

  async findLastRegisterByUserId(user_id: string) {
    return this.prisma.measurements.findFirst({
      where: {
        user_id,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }
}
