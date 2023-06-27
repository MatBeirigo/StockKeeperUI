export interface Produto {
    NomeProduto: string;
    Codigo: null;
    Categoria: string | '';
    Classificacao: string | '';
    ValorCompra: number | 0;
    ValorVenda: number | 0;
    Quantidade: number | 0;
    Cor: string | '';
    Sabor: string | '';
    Fornecedor: string | '';
    Unidade: string | '';
    Peso: number | 0;
    DimensaoEmbalagem: number | 0;
    Descricao: string | '';
    InformacoesFiscais: string | '';
    CodigoBarras: number | 0;
}
