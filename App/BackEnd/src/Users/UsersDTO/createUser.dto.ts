import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsNumber()
  cliente_id?: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  isAvailable?: number;
}
