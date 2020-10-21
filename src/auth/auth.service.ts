import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.userService.findUser(userEmail);
    if (user && user.password === userPassword) {
      const { id, name, email } = user;
      return { id, name, email };
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}