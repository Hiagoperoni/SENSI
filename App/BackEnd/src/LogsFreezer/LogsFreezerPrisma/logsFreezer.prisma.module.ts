import { Module } from '@nestjs/common';
import { LogsFreezerPrismaService } from './logsFreezer.prisma.service';

@Module({
  providers: [LogsFreezerPrismaService],
  exports: [LogsFreezerPrismaService],
})
export class LogsFreezerPrismaModule {}
