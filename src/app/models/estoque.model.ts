export interface Estoque {
    codigo: number;
    produto: string;
    idAlteracao: number;
    dataAlteracao: Date;
    tipoAlteracao: string;
    quantidadeEntrada: number;
    quantidadeSaida: number;
    quantidadeSaldo: number;
    custoEntrada: number;
    custoSaida: number;
    custoSaldo: number;
}