import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email:string, password: string) {
    const user = await this.userService.findUser(email);
    // console.log(email)
    // console.log(password)
    if (user && user.password === password) {
      const { id, name, email } = user; 
      return { id, name, email };
    }

     throw new UnauthorizedException('Sem autorização !');
  }

  async login({email,}) {
    //console.log(email)
    const user = await this.userService.findUser(email);
    //console.log(user)
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}