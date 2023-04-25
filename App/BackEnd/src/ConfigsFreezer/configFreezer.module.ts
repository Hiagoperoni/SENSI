import { Module } from '@nestjs/common';
import { ConfigFreezerPrismaModule } from './configFreezerPrisma/configFreezer.prisma.module';
import { ConfigFreezerController } from './configFreezer.controller';
import { ConfigFreezerService } from './configFreezer.service';

@Module({
  imports: [ConfigFreezerPrismaModule],
  controllers: [ConfigFreezerController],
  providers: [ConfigFreezerService],
  exports: [ConfigFreezerService],
})
export class ConfigFreezerModule {}
