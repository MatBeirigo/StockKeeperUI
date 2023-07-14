import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalSaidaComponent } from './modalSaida.component';

@NgModule(
    {
        declarations: [ModalSaidaComponent],
        imports: [CommonModule, FormsModule],
        exports: [ModalSaidaComponent]
    }
)

export class ModalSaidaModule { }