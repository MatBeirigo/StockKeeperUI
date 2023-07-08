export interface Produto {
    NomeProduto: string;
    Codigo: null;
    Categoria: string | '';
    Classificacao: string | '';
    Cor: string | '';
    Sabor: string | '';
    Fornecedor: string | '';
    Unidade: string | '';
    Peso: number | 0;
    DimensaoEmbalagem: number | 0;
    Descricao: string | '';
    InformacoesFiscais: string | '';
    CodigoBarras: bigint | 0;
}
