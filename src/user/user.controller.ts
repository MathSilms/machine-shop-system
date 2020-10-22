import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateUserDto } from './dtos/create-user.dto';
import { ReturnUserDto } from './dtos/return-user.tdo';
import { UserService } from './user.service'
@Controller('user')
export class UserController {
    constructor(
        private userService:UserService
    ){}

@UseGuards(LocalAuthGuard)
@Post('create')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.userService.createUser(createUserDto);
    return {
      user,
      message: 'Cadastro efetuado com sucesso!',
    };
  }

@Get()
  async findAll(){
    const user = await this.userService.findAll()
    return user
  }




}
