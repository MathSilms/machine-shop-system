import { Module } from '@nestjs/common';
import { FornecedorController } from './fornecedor.controller';

@Module({
  controllers: [FornecedorController]
})
export class FornecedorModule {}
