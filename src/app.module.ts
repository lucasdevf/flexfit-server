import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TrainingsModule } from './trainings/trainings.module';
import { TrainingsExercisesModule } from './trainings-exercises/trainings-exercises.module';
import { UsersMeasurementsModule } from './users-measurements/users-measurements.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TrainingsModule,
    TrainingsExercisesModule,
    UsersMeasurementsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
