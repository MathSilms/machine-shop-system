

import { EntityRepository, Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProductsDto } from './dtos/create-products.dto';


@EntityRepository(ProductsEntity)
export class ProductsRepository extends Repository<ProductsEntity> {
  async createProduct(
    createProductsDto: CreateProductsDto,
  ): Promise<ProductsEntity> {
    const { modelo, descricao, id_fornecedor, name, marca, preco, quantidade } = createProductsDto;
  
    

    const product = this.create();
    product.name = name;
    product.modelo = modelo ;
    product.descricao = (descricao !== '' && descricao !== undefined) ? descricao : '';
    product.marca = marca;
    product.id_fornecedor = id_fornecedor;
    product.preco = preco;
    product.quantidade = quantidade;
    
    try {
      await product.save();
      
      
      return product;
    } catch (error) {
      
      //console.log(error)
      // if (error.code.toString() === ) {

      // }
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