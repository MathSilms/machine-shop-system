

import { EntityRepository, Repository } from 'typeorm';
import { Products } from './products.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProductsDto } from './dtos/create-products.dto';


@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {
  async createProduct(
    createProductsDto: CreateProductsDto,
  ): Promise<Products> {
    const { modelo, descricao, id_fornecedor, name, marca, preco, quantidade } = createProductsDto;
  

    const product = this.create();
    product.name = name;
    product.modelo = modelo ;
    product.descricao = descricao;
    product.marca = marca;
    product.id_fornecedor = id_fornecedor;
    product.preco = preco;
    product.quantidade = quantidade;
    
    try {
      console.log(product)
      await product.save();
      
      
      return product;
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