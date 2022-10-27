import {
  Controller,
  ParseFilePipeBuilder,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ImagesHistoryService } from './images-history.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('images-history')
export class ImagesHistoryController {
  constructor(private readonly imagesHistoryService: ImagesHistoryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(JwtAuthGuard)
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'image',
        })
        .build({
          fileIsRequired: true,
        }),
    )
    file: Express.Multer.File,
    @Request() req,
  ) {
    return this.imagesHistoryService.create({
      user_id: req.user.id,
      image_name: file.filename,
    });
  }
}
