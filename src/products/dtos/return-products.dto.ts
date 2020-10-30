
import { ProductsEntity } from '../products.entity';

export class ReturnProductDto {
  products: ProductsEntity;
  message: string;
}