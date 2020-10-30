
export class CreateEstoqueDto {
    produto: string;
    marca: string;
    modelo: string;
    descricao?: string;       
    quantidade: number;       
    preco: number;
    id_fornecedor:number;     
  }