import { Module } from '@nestjs/common';
import { LogsFreezerPrismaModule } from './LogsFreezerPrisma/logsFreezer.prisma.module';
import { LogsFreezerController } from './logsFreezer.controller';
import { LogsFreezerService } from './logsFreezer.service';

@Module({
  imports: [LogsFreezerPrismaModule],
  controllers: [LogsFreezerController],
  providers: [LogsFreezerService],
  exports: [LogsFreezerService],
})
export class LogsFreezerModule {}
