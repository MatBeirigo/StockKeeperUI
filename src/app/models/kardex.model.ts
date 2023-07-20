export interface Kardex {
    id: number;
    produto: string;
    idAlteracao: number;
    dataAlteracao: Date;
    tipoAlteracao: string;
    quantidadeEntrada: number;
    valorUnitarioEntrada: number;
    valorTotalEntrada: number;
    quantidadeSaida: number;
    valorUnitarioSaida: number;
    valorTotalSaida: number;
    quantidadeSaldo: number;
    valorUnitarioSaldo: number;
    valorTotalSaldo: number;
}