import { Module } from '@nestjs/common';
import { InfoSensorController } from './infoSensor.controller';
import { InfoSensorService } from './infoSensor.service';
import { InfoSensorPrismaModule } from 'src/InfosSensor/InfoSensorPrisma/infoSensor.prisma.module';

@Module({
  imports: [InfoSensorPrismaModule],
  controllers: [InfoSensorController],
  providers: [InfoSensorService],
  exports: [InfoSensorService],
})
export class InfoSensorModule {}
