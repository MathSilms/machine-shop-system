
import { FornecedorEntity } from '../fornecedor.entity';

export class ReturnFornecedorDto {
  products: FornecedorEntity;
  message: string;
}