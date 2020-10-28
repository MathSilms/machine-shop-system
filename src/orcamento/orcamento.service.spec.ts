import { Test, TestingModule } from '@nestjs/testing';
import { OrcamentoService } from './orcamento.service';

describe('OrcamentoService', () => {
  let service: OrcamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrcamentoService],
    }).compile();

    service = module.get<OrcamentoService>(OrcamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
