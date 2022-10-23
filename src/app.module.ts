import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TrainingsModule } from './trainings/trainings.module';
import { TrainingsExercisesModule } from './trainings-exercises/trainings-exercises.module';

@Module({
  imports: [UsersModule, AuthModule, TrainingsModule, TrainingsExercisesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
