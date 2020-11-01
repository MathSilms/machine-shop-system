import { Module } from '@nestjs/common';
import { SaidaController } from './saida.controller';
import { SaidaService } from './saida.service';

@Module({
  controllers: [SaidaController],
  providers: [SaidaService]
})
export class SaidaModule {}
