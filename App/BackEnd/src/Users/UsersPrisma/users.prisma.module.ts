import { Module } from '@nestjs/common';
import { UsersPrismaService } from './users.prisma.service';

@Module({
  providers: [UsersPrismaService],
  exports: [UsersPrismaService],
})
export class UsersPrismaModule {}
