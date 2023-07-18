import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { Estoque } from '../models/estoque.model';

@Injectable({
    providedIn: 'root'
})

export class EstoqueService {
    constructor(private httpClient: HttpClient) { }

    private readonly baseUrl = environment["endPoint"];

    ListarProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(`${this.baseUrl}/ListarProdutos`);
    }

    ObterProduto(id: number): Observable<Produto> {
        return this.httpClient.get<Produto>(`${this.baseUrl}/ObterProdutoPorId/${id}`);
    }

    ObterEstoque(id: number): Observable<Estoque> {
        return this.httpClient.get<Estoque>(`${this.baseUrl}/ObterEstoquePorId/${id}`);
    }

    EntradaEstoque(estoque: Estoque): Observable<Estoque> {
        console.log(estoque);
        return this.httpClient.post<Estoque>(`${this.baseUrl}/EntradaEstoque`, estoque);
    }

    SaidaEstoque(estoque: Estoque): Observable<Estoque> {
        return this.httpClient.post<Estoque>(`${this.baseUrl}/SaidaEstoque`, estoque);
    }  
}