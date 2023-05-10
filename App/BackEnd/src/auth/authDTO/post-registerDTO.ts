import { IsEmail, IsNumber, IsString } from 'class-validator';

export class PostAuthRegisterDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  num_cliente: number;

  @IsNumber()
  qnt_freezers: number;
}
