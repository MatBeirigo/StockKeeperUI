import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})

export class MenuService{
    constructor() { }

    menuSelecionado: number;
}