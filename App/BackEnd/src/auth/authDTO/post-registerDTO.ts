import { IsEmail, IsString } from 'class-validator';

export class PostAuthRegisterDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
