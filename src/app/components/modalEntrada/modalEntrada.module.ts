import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalEntradaComponent } from './modalEntrada.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule(
    {
        declarations: [ModalEntradaComponent],
        imports: [CommonModule, ReactiveFormsModule, CurrencyMaskModule  ],
        exports: [ModalEntradaComponent]
    }
)

export class ModalEntradaModule { }