import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { ProductService } from './products.service';

@Module({
  providers: [ProductService],
  imports:[TypeOrmModule.forFeature([ProductsRepository])],
  controllers:[ProductController],
  exports:[ProductService]

})
export class ProductsModule {}
