import { Module } from '@nestjs/common';
import { OrcamentoController } from './orcamento.controller';

@Module({
  controllers: [OrcamentoController]
})
export class OrcamentoModule {}
