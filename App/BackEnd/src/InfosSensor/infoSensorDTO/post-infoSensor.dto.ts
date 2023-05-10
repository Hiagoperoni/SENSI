import { IsNumber, IsString } from 'class-validator';

export class PostInfoSensor {
  @IsNumber()
  num_cliente: number;

  @IsNumber()
  freezer_id: number;

  @IsNumber()
  temp_atual: number;

  @IsString()
  status_porta: string;
}
