import { Module } from '@nestjs/common';
import { UsersPrismaModule } from './UsersPrisma/users.prisma.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [UsersPrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
