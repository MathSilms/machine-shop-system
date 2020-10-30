import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntradaController } from './entrada.controller';
import { EntradaRepository } from './entrada.repository';
import { EntradaService } from './entrada.service';

@Module({
  controllers: [EntradaController],
  imports:[TypeOrmModule.forFeature([EntradaRepository])],
  providers: [EntradaService]
})
export class EntradaModule {}
