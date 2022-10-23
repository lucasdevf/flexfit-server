import { forwardRef, Module } from '@nestjs/common';
import { TrainingsExercisesService } from './trainings-exercises.service';
import { TrainingsExercisesController } from './trainings-exercises.controller';
import { TrainingsModule } from '../trainings/trainings.module';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule, forwardRef(() => TrainingsModule)],
  controllers: [TrainingsExercisesController],
  providers: [TrainingsExercisesService],
  exports: [TrainingsExercisesService],
})
export class TrainingsExercisesModule {}
