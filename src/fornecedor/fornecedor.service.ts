import { Injectable, InternalServerErrorException, UnprocessableEntityException, } from '@nestjs/common';
import { CreateFornecedorDto } from './dtos/create-fornecedor.dto';
import { FornecedorRepository } from './fornecedor.repository';
import {  FornecedorEntity } from './fornecedor.entity';


@Injectable()
export class FornecedorService {
    constructor(
        private fornecedorRepository:FornecedorRepository,
    ){}
    async createFornecedor(createFornecedorDto:CreateFornecedorDto): Promise<FornecedorEntity>{
        const fornecedor = await this.fornecedorRepository.findOne({
            where:{ 
                name:createFornecedorDto.name, 
                marca:createFornecedorDto.telefone, 
                modelo:createFornecedorDto.telefone2
            }});
        if(fornecedor){
            
            throw new UnprocessableEntityException('Produto já cadastrado');
        }
         return await this.fornecedorRepository.createFornecedor(createFornecedorDto)  
    }

    async findAll(){
        const products = await this.fornecedorRepository.findAndCount()
        if(products){
            return products
        } else{
            throw new InternalServerErrorException('Algo deu errado!');
        }
    }

}
