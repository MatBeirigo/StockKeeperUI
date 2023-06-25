import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ComercialComponent } from './comercial.component';

const routes: Routes = [{   
    path: '',
    component: ComercialComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComercialRoutingModule{}