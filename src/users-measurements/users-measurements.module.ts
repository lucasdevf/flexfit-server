import { Module } from '@nestjs/common';
import { UsersMeasurementsService } from './users-measurements.service';
import { UsersMeasurementsController } from './users-measurements.controller';
import { UsersModule } from 'src/users/users.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [UsersMeasurementsController],
  providers: [UsersMeasurementsService],
})
export class UsersMeasurementsModule {}
