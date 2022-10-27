import { Module } from '@nestjs/common';
import { ImagesHistoryService } from './images-history.service';
import { ImagesHistoryController } from './images-history.controller';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from 'src/database/database.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    DatabaseModule,
    UsersModule,
  ],
  controllers: [ImagesHistoryController],
  providers: [ImagesHistoryService],
})
export class ImagesHistoryModule {}
