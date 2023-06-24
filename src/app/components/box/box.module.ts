import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box.component';

@NgModule(
    {
        declarations: [BoxComponent],
        imports: [CommonModule, FormsModule],
        exports: [BoxComponent]
    }
)

export class BoxModule { }