import { IsNumber } from 'class-validator';

export class PostConfigFreezerDTO {
  @IsNumber()
  num_cliente: number;

  @IsNumber()
  freezer_id: number;

  @IsNumber()
  temp_padrao: number;

  @IsNumber()
  temp_min: number;

  @IsNumber()
  temp_max: number;

  @IsNumber()
  porta_tempo: number;
}
