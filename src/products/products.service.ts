import { Injectable, InternalServerErrorException, UnprocessableEntityException } from '@nestjs/common';
import { CreateProductsDto } from './dtos/create-products.dto';
import { ProductsRepository } from './products.repository';
import {  Products } from './products.entity';


@Injectable()
export class ProductService {
    constructor(
        private productsRepository:ProductsRepository,
    ){}
    async createProduct(createProductsDto:CreateProductsDto): Promise<Products>{
        const userExist = await this.productsRepository.findOne({where:{ email:String }})
       
        if(userExist){
            
            throw new UnprocessableEntityException('Usuário já existente');
        }
         return await this.productsRepository.createProduct(createProductsDto)  
    }
    async findProduct(email:string){
        const userExist = await this.productsRepository.findOne({where:{email}})
        //console.log(email)
        if(userExist){
            return userExist
        } else{
            throw new UnprocessableEntityException('Usuário não existente');
        }
    }
    async findAll(){
        const products = await this.productsRepository.find()
        if(products){
            return products
        } else{
            throw new InternalServerErrorException('Algo deu errado!');
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
