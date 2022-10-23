import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create({ name, email, password }: CreateUserDto) {
    const emailAlreadyExists = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (emailAlreadyExists)
      throw new HttpException('Este e-mail já está em uso.', 400);

    return this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async me(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) throw new HttpException('Usuário não encontrado.', 404);

    const { password, ...result } = user;

    return result;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) throw new HttpException('Usuário não encontrado.', 404);

    const emailAlreadyExists = await this.prisma.user.findFirst({
      where: {
        email: updateUserDto.email,
        id: {
          not: id,
        },
      },
    });

    if (emailAlreadyExists)
      throw new HttpException('Este e-mail já está em uso.', 400);

    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }
}
