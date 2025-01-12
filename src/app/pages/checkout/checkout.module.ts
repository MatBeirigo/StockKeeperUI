import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './Checkout-routing.module';
import { BoxModule } from 'src/app/components/box/box.module';

@NgModule(
    {
        providers: [],
        declarations: [CheckoutComponent],
        imports: [
            CommonModule,
            CheckoutRoutingModule,
            NavbarModule,
            SidebarModule,
            BoxModule
        ]
    }
)

export class CheckoutModule{}