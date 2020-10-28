
import { EntityRepository, Repository } from 'typeorm';
import { FornecedorEntity } from './fornecedor.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateFornecedorDto } from './dtos/create-fornecedor.dto';

@EntityRepository(FornecedorEntity)
export class FornecedorRepository extends Repository<FornecedorEntity> {
  async createFornecedor(
    createFornecedorDto: CreateFornecedorDto,
  ): Promise<FornecedorEntity> {

    const {cnpj, name, telefone, telefone2 } = createFornecedorDto;
    
    

    const fornecedor = this.create();
    fornecedor.telefone2 = (telefone2 !== '' && telefone2 !== undefined) ? telefone2 : '';
    fornecedor.cnpj = cnpj;
    fornecedor.name = name;
    fornecedor.telefone = telefone
    
    
    try {
      console.log(fornecedor)
      await fornecedor.save();
      
      
      return fornecedor;
    } catch (error) {
      console.log(error)
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