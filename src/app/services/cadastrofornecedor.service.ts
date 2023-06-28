import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedores.model';

@Injectable({
    providedIn: 'root'
})

export class CadastroFornecedorService {
    constructor(private httpClient: HttpClient) { }

    private readonly baseUrl = environment["endPoint"];

    CadastrarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        return this.httpClient.post<Fornecedor>(`${this.baseUrl}/AdicionarFornecedor`, fornecedor);
    }
}