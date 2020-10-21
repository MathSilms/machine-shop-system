
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { hash, hashSync } from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<User> {
    const {email, name, cpf, password } = createUserDto;
  
    const password_hash = await hashSync(password, 10)

    const user = this.create();
    user.name = name;
    user.email = email;
    user.cpf = cpf;
    user.password = password_hash
    
    try {
      console.log(user)
      await user.save();
      
      
      return user;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Dados inválidos');
      } else {
        throw new InternalServerErrorException(
          'Faltam alguns dados para conseguir cadastrar um usuário',
        );
      }
    }
  }
}