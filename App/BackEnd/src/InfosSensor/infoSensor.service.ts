import { Injectable } from '@nestjs/common';
import { PostInfoSensor } from './infoSensorDTO/post-infoSensor.dto';
import { InfoSensorPrismaService } from 'src/InfosSensor/InfoSensorPrisma/infoSensor.prisma.service';

@Injectable()
export class InfoSensorService {
  constructor(private readonly prisma: InfoSensorPrismaService) {}

  async postData({
    num_cliente,
    freezer_id,
    status_porta,
    temp_atual,
  }: PostInfoSensor) {
    return this.prisma.freezerApi.create({
      data: {
        num_cliente,
        freezer_id,
        temp_atual,
        status_porta,
      },
    });
  }

  async getAll() {
    return this.prisma.freezerApi.findMany();
  }

  async getById(id: number) {
    return this.prisma.freezerApi.findMany({
      where: {
        num_cliente: Number(id),
      },
    });
  }
}
