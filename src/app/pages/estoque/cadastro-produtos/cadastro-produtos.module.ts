import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { BoxModule } from 'src/app/components/box/box.module';
import { CadastroProdutosRoutingModule } from './Cadastro-produtos-routing.module';
import { CadastroProdutosComponent } from './cadastro-produtos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule(
    {
        providers: [],
        declarations: [CadastroProdutosComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            HttpClientModule,
            CadastroProdutosRoutingModule,
            NavbarModule,
            SidebarModule,
            BoxModule
        ]
    }
)

export class CadastroProdutosModule{}