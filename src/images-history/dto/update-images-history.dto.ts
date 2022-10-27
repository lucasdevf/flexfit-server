import { PartialType } from '@nestjs/mapped-types';
import { CreateImagesHistoryDto } from './create-images-history.dto';

export class UpdateImagesHistoryDto extends PartialType(CreateImagesHistoryDto) {}
