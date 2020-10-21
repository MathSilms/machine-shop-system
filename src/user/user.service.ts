import { ConflictException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './user.repository';
import { hash } from 'bcrypt'
import { User } from './user.entity';


@Injectable()
export class UserService {
    constructor(
        private userRepository:UserRepository,
    ){}
    async createUser(createUserDto:CreateUserDto): Promise<User>{
        const userExist = await this.userRepository.findOne({where:{ email:String }})
       
        if(userExist){
            
            throw new UnprocessableEntityException('Usuário já existente');
        }
         return await this.userRepository.createUser(createUserDto)  
    }
    async findUser(email:string){
        const userExist = await this.userRepository.findOne({where:{ email:String }})
        if(userExist){
            return userExist
        } else{
            throw new UnprocessableEntityException('Usuário já existente');
        }
    }

    // async createUser(createUserDto: CreateUserDto): Promise<Student> {
    //     const studentExist = await this.studentsRepository.findOne({where:{ cpf:String }})
    //     if (studentExist) {
    //       throw new UnprocessableEntityException('Usuário já existente');
    //     } else {
    //       return this.studentsRepository.createStudent(createStudentDto);
    //     }
    //   }

}
