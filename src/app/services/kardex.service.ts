import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
    providedIn: 'root'
})

export class KardexService {
    constructor(private httpClient: HttpClient) { }

    private readonly baseUrl = environment["endPoint"];

    ListarProdutos(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(`${this.baseUrl}/ListarProdutos`);
    }
}