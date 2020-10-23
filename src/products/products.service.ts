import { Injectable, InternalServerErrorException, UnprocessableEntityException, } from '@nestjs/common';
import { CreateProductsDto } from './dtos/create-products.dto';
import { ProductsRepository } from './products.repository';
import {  Products } from './products.entity';


@Injectable()
export class ProductService {
    constructor(
        private productsRepository:ProductsRepository,
    ){}
    async createProduct(createProductsDto:CreateProductsDto): Promise<Products>{
        const product = await this.productsRepository.findOne({
            where:{ 
                name:createProductsDto.name, 
                marca:createProductsDto.marca, 
                modelo:createProductsDto.modelo
            }});
        if(product){
            
            throw new UnprocessableEntityException('Produto já cadastrado');
        }
         return await this.productsRepository.createProduct(createProductsDto)  
    }

    async findAll(){
        const products = await this.productsRepository.findAndCount()
        if(products){
            return products
        } else{
            throw new InternalServerErrorException('Algo deu errado!');
        }
    }

    async findProductByMarca(marca:string ){
        const productExist = await this.productsRepository.find({where:{marca}})
        
        if(productExist){
            return productExist
        } else{
            throw new UnprocessableEntityException('Produto não Cadastrado!');
        }
    }

    async findProductBymodelo(modelo:string){
        const productsExist = await this.productsRepository.find({where:{modelo}})
        
        if(productsExist){
            return productsExist
        } else{
            throw new UnprocessableEntityException('Produtos não Encontrados!');
        }
    }

    async findProductByFornecedor(fornecedor:number){
        const FornecedorExist = await this.productsRepository.find({where:{id_fornecedor:fornecedor}})
        
        if(FornecedorExist){
            return FornecedorExist
        } else{
            throw new UnprocessableEntityException('Fornecedor não Encontrados!');
        }
    }

    async findProductByPrice(price:number){
        const productPriceExist = await this.productsRepository.find({where:{price}})
        if(productPriceExist){
            return productPriceExist
        }
        throw new UnprocessableEntityException('Produto não Cadastrado!');
    }

}
