import { Module } from '@nestjs/common';
import { InfoSensorPrismaService } from './infoSensor.prisma.service';

@Module({
  providers: [InfoSensorPrismaService],
  exports: [InfoSensorPrismaService],
})
export class InfoSensorPrismaModule {}
