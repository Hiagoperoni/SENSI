import { Module } from '@nestjs/common';
import { ConfigFreezerPrismaService } from './configFreezer.prisma.service';

@Module({
  providers: [ConfigFreezerPrismaService],
  exports: [ConfigFreezerPrismaService],
})
export class ConfigFreezerPrismaModule {}
