import { IsEmail } from 'class-validator';

export class PostAuthForgetDTO {
  @IsEmail()
  email: string;
}
