export interface Estoque {
    codigo: number;
    produto: string;
    dataAlteracao: Date;
    tipoAlteracao: string;
    quantidadeEntrada: number;
    quantidadeSaida: number;
    quantidadeSaldo: number;
    custoEntrada: number;
    custoSaida: number;
    custoSaldo: number;
}