export interface Estoque {
    id: number;
    idEmpresa: number;
    idAlteracao: number;
    produto: string;
    quantidadeEstoque: number;
    valorEstoque: number;
    valorUnitarioEstoque: number;
}