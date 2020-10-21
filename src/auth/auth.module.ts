import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../user/user.repository';
import { AuthService } from './auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository])],
  providers: [AuthService]
})
export class AuthModule {}
