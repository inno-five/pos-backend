import { IsDate, IsString } from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  createBy: string;

  @IsDate()
  createAt: Date;
}
