import { IsNumber } from 'class-validator';

export class PostConfigFreezerDTO {
  @IsNumber()
  cliente_id: number;

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
