import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
    providedIn: 'root'
})
export class CadastroProdutosService {
    constructor(private httpClient: HttpClient) { }

    private readonly baseUrl = environment["endPoint"];

    CadastrarProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(`${this.baseUrl}/AdicionarProduto`, produto);
    }

    ListarCategoria(): Observable<string[]> {
        return this.httpClient.get<string[]>(`${this.baseUrl}/ListarCategorias`);
    }
}
