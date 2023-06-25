import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { BoxModule } from 'src/app/components/box/box.module';
import { EstoqueComponent } from './estoque.component';
import { EstoqueRoutingModule } from './Estoque-routing.module';

@NgModule(
    {
        providers: [],
        declarations: [EstoqueComponent],
        imports: [
            CommonModule,
            EstoqueRoutingModule,
            NavbarModule,
            SidebarModule,
            BoxModule
        ]
    }
)

export class EstoqueModule{}