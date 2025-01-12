import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { FichaEstoqueRoutingModule } from './Ficha-estoque-routing.module';
import { FichaEstoqueComponent } from './ficha-estoque.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoxModule } from 'src/app/components/box/box.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalEntradaModule } from 'src/app/components/modalEntrada/modalEntrada.module';
import { ModalSaidaModule } from 'src/app/components/modalSaida/modalSaida.module';

@NgModule(
    {
        providers: [],
        declarations: [FichaEstoqueComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            HttpClientModule,
            FichaEstoqueRoutingModule,
            NavbarModule,
            SidebarModule,
            BoxModule,
            ModalEntradaModule,
            ModalSaidaModule,
            NgxDatatableModule
        ]
    }
)

export class FichaEstoqueModule{}