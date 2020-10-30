import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstoqueController } from './estoque.controller';
import { EstoqueRepository } from './estoque.repository';
import { EstoqueService } from './estoque.service';


@Module({
  providers: [EstoqueService],
  imports:[TypeOrmModule.forFeature([EstoqueRepository])],
  controllers:[EstoqueController],
  exports:[EstoqueService]

})
export class EstoqueModule {}
