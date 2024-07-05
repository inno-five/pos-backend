import { IsDate, IsNumber, IsString } from 'class-validator';
export class CreateMenuDto {
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
  createBy: string;

  @IsDate()
  createAt: Date;
}
