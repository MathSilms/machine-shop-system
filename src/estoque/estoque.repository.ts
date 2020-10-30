

import { EntityRepository, Repository } from 'typeorm';
import { EstoqueEntity } from './estoque.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateEstoqueDto } from './dtos/create-estoque.dto';


@EntityRepository(EstoqueEntity)
export class EstoqueRepository extends Repository<EstoqueEntity> {
  async createProduct(
    createEstoqueDto: CreateEstoqueDto,
  ): Promise<EstoqueEntity> {
    const { modelo, descricao, id_fornecedor, produto , marca, preco, quantidade } = createEstoqueDto;
  
    

    const product = this.create();
    product.produto = produto;
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