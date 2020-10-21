import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync } from 'bcrypt';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
      private userService: UserService,
      private userRepository:UserRepository
      ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findUser(email);

    const compare = await compareSync(pass,user.password)
    console.log(compare)

    if (user && compare) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}