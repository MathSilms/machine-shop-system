import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateProductsDto } from './dtos/create-products.dto';
import { ReturnProductDto } from './dtos/return-products.dto';
import { ProductService } from './products.service'
@Controller('products')
export class ProductController {
    constructor(
        private productService:ProductService
    ){}

@UseGuards(JwtAuthGuard)
@Post('create')
  async createProduct(
    @Body() createProductsDto: CreateProductsDto,
  ): Promise<ReturnProductDto> {
    const products = await this.productService.createProduct(createProductsDto);
    return {
      products,
      message: 'Cadastro efetuado com sucesso!',
    };
  }
  
@UseGuards(JwtAuthGuard)
@Get()
  async findAll(){
    const products = await this.productService.findAll()
    return products
  }




}
