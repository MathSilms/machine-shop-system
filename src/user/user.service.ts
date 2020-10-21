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
        const { email, password } = createUserDto
        const user = await this.userRepository.findOne({where:{email}})

        if(user){
            throw  new ConflictException('Dados inválidos')
        }
        createUserDto.password = await hash(password, 10, (err, hash )=>{
            if(err){return console.log(err)}
            return hash
        })

         return await this.userRepository.createUser(createUserDto)  
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
