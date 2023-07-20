import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { Estoque } from '../models/estoque.model';

@Injectable({
    providedIn: 'root'
})

export class KardexService {
    constructor(private httpClient: HttpClient) { }

    private readonly baseUrl = environment["endPoint"];

    ListarProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(`${this.baseUrl}/ListarProdutos`);
    }

    ProcurarProdutoNoEstoque(id: string): Observable<any> {
        return this.httpClient.get<Estoque>(`${this.baseUrl}/ObterEstoquePorId/${id}`);
    }

    ProcurarKardex(id:string): Observable<any> {
        return this.httpClient.get<Estoque>(`${this.baseUrl}/ObterKardexPorId/${id}`);
    }
}