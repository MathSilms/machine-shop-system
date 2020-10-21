import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  providers: [UserService],
  imports:[TypeOrmModule.forFeature([UserRepository])],
  controllers:[UserController],
  exports:[UserService]
})

export class UserModule {}
