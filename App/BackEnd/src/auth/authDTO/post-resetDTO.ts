import { IsJWT, IsString } from 'class-validator';

export class PostAuthResetDTO {
  @IsString()
  password: string;

  @IsJWT()
  token: string;
}
