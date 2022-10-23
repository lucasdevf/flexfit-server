import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('trainings')
export class TrainingsController {
  constructor(private readonly trainingsService: TrainingsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body, @Request() req) {
    const { name, weekdays, exercises } = body;

    return this.trainingsService.create({
      name,
      weekdays,
      user_id: req.user.id,
      exercises,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findByUserId(@Request() req) {
    return this.trainingsService.findByUserId(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainingDto: UpdateTrainingDto,
  ) {
    return this.trainingsService.update(id, updateTrainingDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingsService.remove(id);
  }
}
