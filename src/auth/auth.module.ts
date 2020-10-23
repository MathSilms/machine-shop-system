import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from './../user/user.module';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';

import { jwtConstants } from './constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule { }