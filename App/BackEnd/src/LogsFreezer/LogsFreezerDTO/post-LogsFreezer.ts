import { IsNumber, IsString } from 'class-validator';

export class PostLogsFreezer {
  @IsNumber()
  cliente_id: number;

  @IsNumber()
  freezer_id: number;

  @IsNumber()
  temp_atual: number;

  @IsString()
  status_porta: string;
}
