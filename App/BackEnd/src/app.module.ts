import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoSensorModule } from './InfosSensor/infoSensor.module';
import { ConfigFreezerModule } from './ConfigsFreezer/configFreezer.module';
import { UsersModule } from './Users/users.module';
import { LogsFreezerModule } from './LogsFreezer/logsFreezer.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    InfoSensorModule,
    ConfigFreezerModule,
    UsersModule,
    LogsFreezerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
