import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessTypeDto } from './create-business-type.dto';
import { IsDate, IsString } from 'class-validator';

export class UpdateBusinessTypeDto extends PartialType(CreateBusinessTypeDto) {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  tag: string;

  @IsString()
  updateBy: string;

  @IsDate()
  updateAt: Date;
}
