import { Test, TestingModule } from '@nestjs/testing';
import { OrcamentoController } from './orcamento.controller';

describe('OrcamentoController', () => {
  let controller: OrcamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrcamentoController],
    }).compile();

    controller = module.get<OrcamentoController>(OrcamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
