import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersMeasurementDto } from './create-users-measurement.dto';

export class UpdateUsersMeasurementDto extends PartialType(
  CreateUsersMeasurementDto,
) {}
