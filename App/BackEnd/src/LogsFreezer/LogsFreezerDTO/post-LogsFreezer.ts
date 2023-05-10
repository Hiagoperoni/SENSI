import { IsNumber, IsString } from 'class-validator';

export class PostLogsFreezer {
  @IsNumber()
  num_cliente: number;

  @IsNumber()
  freezer_id: number;

  @IsNumber()
  temp_atual: number;

  @IsString()
  porta_status: string;
}
