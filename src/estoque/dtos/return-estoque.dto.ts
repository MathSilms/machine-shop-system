
import { EstoqueEntity } from '../estoque.entity';

export class ReturnEstoqueDto {
  products: EstoqueEntity;
  message: string;
}