import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { EstoqueRepository } from 'src/estoque/estoque.repository';
import { CreateEntradaDto } from './dtos/create-entrada.dto';
import { EntradaEntity } from './entrada.entity';
import { EntradaRepository } from './entrada.repository';

@Injectable()
export class EntradaService {
    constructor(
       private entradaRepository:EntradaRepository
    ){}

    async createEntrada(createEntradaDto:CreateEntradaDto): Promise<EntradaEntity>{
        try{
        const Data = new Date
        console.log(Data)
        
        createEntradaDto.origem.trim().toLocaleLowerCase()
        createEntradaDto.data = Data
        
        return await this.entradaRepository.create(createEntradaDto)
        } catch(err){
            console.log(err)
            throw new UnprocessableEntityException()
        }
    }
}
