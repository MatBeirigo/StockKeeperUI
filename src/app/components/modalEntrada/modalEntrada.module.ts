import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalEntradaComponent } from './modalEntrada.component';

@NgModule(
    {
        declarations: [ModalEntradaComponent],
        imports: [CommonModule, FormsModule],
        exports: [ModalEntradaComponent]
    }
)

export class ModalEntradaModule { }