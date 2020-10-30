import { Test, TestingModule } from '@nestjs/testing';
import { EntradaService } from './entrada.service';

describe('EntradaService', () => {
  let service: EntradaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntradaService],
    }).compile();

    service = module.get<EntradaService>(EntradaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
