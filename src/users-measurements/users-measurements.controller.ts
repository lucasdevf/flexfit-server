import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { UsersMeasurementsService } from './users-measurements.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('users/measurements')
export class UsersMeasurementsController {
  constructor(
    private readonly usersMeasurementsService: UsersMeasurementsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body, @Request() req) {
    const { weight, height } = body;

    return this.usersMeasurementsService.create({
      weight,
      height,
      user_id: req.user.id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/last')
  findLastRegisterByUserId(@Request() req) {
    return this.usersMeasurementsService.findLastRegisterByUserId(req.user.id);
  }
}
