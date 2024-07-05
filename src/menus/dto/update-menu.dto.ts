import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  value: string;

  @IsString()
  path: string;

  @IsString()
  icon: string;

  @IsNumber()
  order: number;

  @IsNumber()
  level: number;

  @IsNumber()
  parent: number;

  @IsString()
  updateBy: string;

  @IsDate()
  updateAt: Date;
}
