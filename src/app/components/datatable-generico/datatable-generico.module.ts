import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatatableGenericoComponent } from './datatable-generico.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule(
    {
        declarations: [DatatableGenericoComponent],
        imports: [CommonModule, FormsModule, MatTableModule, MatPaginatorModule, MatSortModule],
        exports: [DatatableGenericoComponent]
    }
)

export class DatatableGenericoModule { }