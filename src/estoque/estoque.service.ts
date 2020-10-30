import { Injectable, InternalServerErrorException, UnprocessableEntityException, } from '@nestjs/common';
import { EstoqueRepository } from './estoque.repository';
import {  EstoqueEntity } from './estoque.entity';
import { CreateEstoqueDto } from './dtos/create-estoque.dto';


@Injectable()
export class EstoqueService {
    constructor(
        private estoqueRepository:EstoqueRepository,
    ){}
    async createProduct(createEstoqueDto:CreateEstoqueDto): Promise<EstoqueEntity>{
        
        const { marca, produto, modelo, preco ,quantidade } = createEstoqueDto
        
        const product = await this.estoqueRepository.findOne({
            where:{ 
                produto, 
                marca, 
                modelo,
                preco
            }});

        if(product){
            createEstoqueDto.quantidade + quantidade 
            return await this.estoqueRepository.save(createEstoqueDto)
        }
         return await this.estoqueRepository.createProduct(createEstoqueDto)  
    }

    async findAll(){
        const products = await this.estoqueRepository.findAndCount()
        if(products){
            return products
        } else{
            throw new InternalServerErrorException('Algo deu errado!');
        }
    }

    async findProductByParam(param:string){
        const products = await this.estoqueRepository.findAndCount({where:{param}})
        
        if(products){
            return products
        }
        throw new UnprocessableEntityException('Produto não Cadastrado!');
    }

    async countTotalPrice(){
        const total = await this.estoqueRepository.find({select:['preco']})
        const reducered = (accumulator, currentValue) => accumulator + currentValue
        const result = total.map(e=> e.preco).reduce(reducered)
        return result
    }

    async countTotalByParam(parametro:string){
        const total = await this.estoqueRepository.find({where:{ parametro }, select:['preco']})
        const reducered = (accumulator, currentValue) => accumulator + currentValue
        const result = total.map(e=> e.preco).reduce(reducered)
        return result
    }
    

    // async findProductByMarca(marca:string){
    //     const productExist = await this.estoqueRepository.findAndCount({where:{marca}})
        
    //     if(productExist){
    //         return productExist
    //     } else{
    //         throw new UnprocessableEntityException('Produto não Cadastrado!');
    //     }
    // }

    // async findProductBymodelo(modelo:string){
    //     const productsExist = await this.estoqueRepository.findAndCount({where:{modelo}})
        
    //     if(productsExist){
    //         return productsExist
    //     } else{
    //         throw new UnprocessableEntityException('Produtos não Encontrados!');
    //     }
    // }

    // async findProductByFornecedor(fornecedor:number){
    //     const FornecedorExist = await this.estoqueRepository.findAndCount({where:{id_fornecedor:fornecedor}})
        
    //     if(FornecedorExist){
    //         return FornecedorExist
    //     } else{
    //         throw new UnprocessableEntityException('Fornecedor não Encontrados!');
    //     }
    // }

    // async findProductByPrice(preco:number){
    //     const productPriceExist = await this.estoqueRepository.findAndCount({where:{preco}})
        
    //     if(productPriceExist){
    //         return productPriceExist
    //     }
    //     throw new UnprocessableEntityException('Produto não Cadastrado!');
    // }

   
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
