import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FichaEstoqueComponent } from './ficha-estoque.component';

const routes: Routes = [{   
    path: '',
    component: FichaEstoqueComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FichaEstoqueRoutingModule{}