import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TrainingsModule } from './trainings/trainings.module';
import { TrainingsExercisesModule } from './trainings-exercises/trainings-exercises.module';
import { UsersMeasurementsModule } from './users-measurements/users-measurements.module';
import { GoalsModule } from './goals/goals.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TrainingsModule,
    TrainingsExercisesModule,
    UsersMeasurementsModule,
    GoalsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
