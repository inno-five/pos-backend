import { IsDate, IsString } from 'class-validator';

export class CreateBusinessTypeDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  tag: string;

  @IsString()
  createBy: string;

  @IsDate()
  createAt: Date;
}
