import { Injectable, InternalServerErrorException, UnprocessableEntityException, } from '@nestjs/common';
import { CreateProductsDto } from './dtos/create-products.dto';
import { ProductsRepository } from './products.repository';
import {  ProductsEntity } from './products.entity';


@Injectable()
export class ProductService {
    constructor(
        private productsRepository:ProductsRepository,
    ){}
    async createProduct(createProductsDto:CreateProductsDto): Promise<ProductsEntity>{
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

    async findProductByMarca(marca:string){
        const productExist = await this.productsRepository.findAndCount({where:{marca}})
        
        if(productExist){
            return productExist
        } else{
            throw new UnprocessableEntityException('Produto não Cadastrado!');
        }
    }

    async findProductBymodelo(modelo:string){
        const productsExist = await this.productsRepository.findAndCount({where:{modelo}})
        
        if(productsExist){
            return productsExist
        } else{
            throw new UnprocessableEntityException('Produtos não Encontrados!');
        }
    }

    async findProductByFornecedor(fornecedor:number){
        const FornecedorExist = await this.productsRepository.findAndCount({where:{id_fornecedor:fornecedor}})
        
        if(FornecedorExist){
            return FornecedorExist
        } else{
            throw new UnprocessableEntityException('Fornecedor não Encontrados!');
        }
    }

    async findProductByPrice(preco:number){
        const productPriceExist = await this.productsRepository.findAndCount({where:{preco}})
        
        if(productPriceExist){
            return productPriceExist
        }
        throw new UnprocessableEntityException('Produto não Cadastrado!');
    }

    async countTotalPrice(){
        const total = await this.productsRepository.find({select:['preco']})
        const reducered = (accumulator, currentValue) => accumulator + currentValue
        const result = total.map(e=> e.preco).reduce(reducered)
        return result
    }

    async countTotalByParam(parametro:string){
        const total = await this.productsRepository.find({where:{ parametro }, select:['preco']})
        const reducered = (accumulator, currentValue) => accumulator + currentValue
        const result = total.map(e=> e.preco).reduce(reducered)
        return result
    }
    
    // async countTotalPriceByMarca(marca:string){
    //     const total = await this.productsRepository.find({where:{ marca }, select:['preco']})
    //     const reducered = (accumulator, currentValue) => accumulator + currentValue
    //     const result = total.map(e=> e.preco).reduce(reducered)
    //     return result
    // }
    
    // async countTotalPriceByfornecedor(fornecedor:string){
    //     const total = await this.productsRepository.find({where:{ fornecedor }, select:['preco']})
    //     const reducered = (accumulator, currentValue) => accumulator + currentValue
    //     const result = total.map(e=> e.preco).reduce(reducered)
    //     return result
    // }
    
    // async countTotalPriceByModelo(Modelo:string){
    //     const total = await this.productsRepository.find({where:{ Modelo }, select:['preco']})
    //     const reducered = (accumulator, currentValue) => accumulator + currentValue
    //     const result = total.map(e=> e.preco).reduce(reducered)
    //     return result
    // }

   



}
