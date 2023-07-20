import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KardexComponent } from './kardex.component';
import { KardexRoutingModule } from './Kardex-routing.module';
import { BoxModule } from 'src/app/components/box/box.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule(
    {
        providers: [],
        declarations: [KardexComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            HttpClientModule,
            KardexRoutingModule,
            NavbarModule,
            SidebarModule,
            BoxModule,
            NgxDatatableModule
        ]
    }
)

export class KardexModule{}