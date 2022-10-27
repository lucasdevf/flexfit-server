import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateImagesHistoryDto } from './dto/create-images-history.dto';
import { UpdateImagesHistoryDto } from './dto/update-images-history.dto';

@Injectable()
export class ImagesHistoryService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create(createImagesHistoryDto: CreateImagesHistoryDto) {
    const { user_id, image_name } = createImagesHistoryDto;

    await this.usersService.findById(user_id);

    return this.prisma.imageHistory.create({
      data: {
        user_id,
        image_name,
      },
    });
  }

  findAll() {
    return `This action returns all imagesHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagesHistory`;
  }

  update(id: number, updateImagesHistoryDto: UpdateImagesHistoryDto) {
    return `This action updates a #${id} imagesHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagesHistory`;
  }
}
