import { forwardRef, Module } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';
import { TrainingsExercisesModule } from '../trainings-exercises/trainings-exercises.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    forwardRef(() => TrainingsExercisesModule),
  ],
  controllers: [TrainingsController],
  providers: [TrainingsService],
  exports: [TrainingsService],
})
export class TrainingsModule {}
