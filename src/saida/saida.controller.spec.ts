import { Test, TestingModule } from '@nestjs/testing';
import { SaidaController } from './saida.controller';

describe('SaidaController', () => {
  let controller: SaidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaidaController],
    }).compile();

    controller = module.get<SaidaController>(SaidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
