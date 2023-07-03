import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ComercialComponent } from './comercial.component';
import { ComercialRoutingModule } from './Comercial-routing.module';
import { BoxModule } from 'src/app/components/box/box.module';

@NgModule(
    {
        providers: [],
        declarations: [ComercialComponent],
        imports: [
            CommonModule,
            ComercialRoutingModule,
            NavbarModule,
            SidebarModule,
            BoxModule
        ]
    }
)

export class ComercialModule{}