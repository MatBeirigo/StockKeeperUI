import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalSaidaComponent } from './modalSaida.component';

@NgModule(
    {
        declarations: [ModalSaidaComponent],
        imports: [CommonModule, ReactiveFormsModule],
        exports: [ModalSaidaComponent]
    }
)

export class ModalSaidaModule { }