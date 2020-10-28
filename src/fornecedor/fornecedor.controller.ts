import { Controller, Post } from '@nestjs/common';
import { CreateFornecedorDto } from './dtos/create-fornecedor.dto';

@Controller('fornecedor')
export class FornecedorController {


@Post('create')
async createFornecedor(createFornecedorDto:CreateFornecedorDto){

}


}
