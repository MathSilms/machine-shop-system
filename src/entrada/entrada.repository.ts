import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateEntradaDto } from "./dtos/create-entrada.dto";
import { EntradaEntity } from "./entrada.entity";



@EntityRepository(EntradaEntity)
export class EntradaRepository extends Repository<EntradaEntity>{
    async createEntrada(
        createEntradaDto:CreateEntradaDto
        ): Promise <EntradaEntity> {

            const { quantidade, data, origem } = createEntradaDto
            const entrada = this.create();
            
            entrada.data = data;
            entrada.quantidade = quantidade;
            entrada.origem = origem
            
            try {
              await entrada.save();
              
              return entrada;

            } catch (error) {
              
              console.log(error)
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


