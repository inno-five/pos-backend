import { IsDate, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  role: string;

  @IsString()
  createBy: string;

  @IsDate()
  createAt: Date;

  //   TODO:uncomment when user group role is ready
  //   @IsArray()
  //   roles: CreateRoleDto[];
}
