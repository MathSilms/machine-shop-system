import { Test, TestingModule } from '@nestjs/testing';
import { EntradaController } from './entrada.controller';

describe('EntradaController', () => {
  let controller: EntradaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntradaController],
    }).compile();

    controller = module.get<EntradaController>(EntradaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
