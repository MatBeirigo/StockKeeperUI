import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalSaidaComponent } from './modalSaida.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule(
    {
        declarations: [ModalSaidaComponent],
        imports: [CommonModule, ReactiveFormsModule, CurrencyMaskModule],
        exports: [ModalSaidaComponent]
    }
)

export class ModalSaidaModule { }