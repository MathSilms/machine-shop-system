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
    // async createEntradaByProduct(origem:string,data:Date,quantidade:number){
    //     try{
    //         const Data = new Date
    //         console.log(Data)
    //         origem.trim().toLocaleLowerCase()
    //         data = Data
            
    //         return await this.entradaRepository.create({origem, data , quantidade})
    //         } catch(err){
    //             console.log(err)
    //             throw new UnprocessableEntityException()
    //         }
    // }
}
