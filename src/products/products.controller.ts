import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
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

//@UseGuards(JwtAuthGuard)
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
  
//@UseGuards(JwtAuthGuard)
@Get()
  async findAll(){
    const products = await this.productService.findAll()
    return products
  }

  @Get('/:modelo')
  async findProductBymodelo(
    @Param('modelo') modelo:string
  ){
    console.log(modelo)
    const product = await this.productService.findProductBymodelo(modelo)
    return product
  }
  
  @Get('modelo/:marca')
  async findProductByMarca(
    @Param('marca') marca:string
  ){
    console.log(marca)
    const product = await this.productService.findProductByMarca(marca)
    return product
  }

  @Get(':price')
  async findProductByPrice(
    @Param('price') price:number
  ){
    console.log(price)
    const product = await this.productService.findProductByPrice(price)
    return product
  }
  

  @Get('fornecedor/:fornecedor')
  async findProductByFornecedor(
    @Param('fornecedor') fornecedor:number
  ){
    console.log(fornecedor)
    const product = await this.productService.findProductByFornecedor(fornecedor)
    return product
  }





}
