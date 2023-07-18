import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalEntradaComponent } from './modalEntrada.component';

@NgModule(
    {
        declarations: [ModalEntradaComponent],
        imports: [CommonModule, ReactiveFormsModule],
        exports: [ModalEntradaComponent]
    }
)

export class ModalEntradaModule { }