import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroFornecedorComponent } from './cadastro-fornecedor.component';
import { CadastroFornecedorRoutingModule } from './Cadastro-fornecedor-routing.module';
import { BoxModule } from 'src/app/components/box/box.module';



@NgModule(
    {
        providers: [],
        declarations: [CadastroFornecedorComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            HttpClientModule,
            CadastroFornecedorRoutingModule,
            NavbarModule,
            SidebarModule,
            BoxModule
        ]
    }
)

export class CadastroFornecedorModule{}