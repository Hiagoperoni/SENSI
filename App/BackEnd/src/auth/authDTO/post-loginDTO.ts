import { IsEmail, IsString } from 'class-validator';

export class PostAuthLoginDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
