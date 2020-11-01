import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { LocalAuthGuard } from 'src/auth/local-auth.guard';
// import { EntradaService } from 'src/entrada/entrada.service';
import { CreateEstoqueDto } from './dtos/create-estoque.dto';
import { ReturnEstoqueDto } from './dtos/return-estoque.dto';
import { EstoqueService } from './estoque.service'
@Controller('products')
export class EstoqueController {
    constructor(
        private estoqueService:EstoqueService
    ){}

  //@UseGuards(JwtAuthGuard)
  @Post('create')
    async createProduct(
    @Body() createEstoqueDto: CreateEstoqueDto,
    ): Promise<ReturnEstoqueDto> {
    const products = await this.estoqueService.createProduct(createEstoqueDto);
    return {
    products,
    message: 'Entrada efetuado com sucesso!',
    };
  }

  //@UseGuards(JwtAuthGuard)
  @Get('all')
   async findAll(){
  const products = await this.estoqueService.findAll()
  return products
  }

  ;

  // @Get('marca/:marca')
  //   async findProductByMarca(
  //   @Param('marca') marca:string
  //   ){
  //   //console.log(marca)
  //   const product = await this.productService.findProductByMarca(marca)
  //   return product
  // }

  // @Get('preco/:price')
  //   async findProductByPrice(
  //   @Param('price') price:number
  //   ){
  //   //console.log(price)
  //   const product = await this.productService.findProductByPrice(price)
  //   return product
  // }


  // @Get('fornecedor/:fornecedor')
  //   async findProductByFornecedor(
  //   @Param('fornecedor') fornecedor:number
  //   ){
  //   //console.log(fornecedor)
  //   const product = await this.productService.findProductByFornecedor(fornecedor)
  //   return product
  // }
  
  @Get('all/price')
  async countTotalPrice(){
 const total = await this.estoqueService.countTotalPrice()
 return `O valor total em caixa é de R$${total}`
 }
 
//  @Get('all/:marca/price')
//   async countTotalPriceBymarca(
//     @Param('marca') marca:string 
//   ){
//  const total = await this.estoqueService.countTotalPriceByMarca(marca)
//  return `O valor total em caixa é de R$${total} `
//  }
 
;
 
//  @Get('all/:fornecedor/price')
//   async countTotalPriceByModelo(
//     @Param('Modelo') Modelo:string 
//   ){
//  const total = await this.estoqueService.countTotalPriceByfornecedor(Modelo)
//  return `O valor total em caixa é de R$${total} `
//  }
 
 @Get('all/:parametro')
  async countTotalByParametro(
    @Param('parametro') parametro:string 
  ){
 const total = await this.estoqueService.countTotalByParam(parametro)
 return `O valor total em caixa é de R$${total} `
 }





}
