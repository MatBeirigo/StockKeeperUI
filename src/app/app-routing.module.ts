import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'', component: LoginComponent
  },
  {
    path:'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'estoque', loadChildren: () => import('./pages/estoque/estoque.module').then(m => m.EstoqueModule)
  },
  {
    path:'fichaestoque', loadChildren: () => import('./pages/estoque/ficha-estoque/ficha-estoque.module').then(m => m.FichaEstoqueModule)
  },
  {
    path:'kardex', loadChildren: () => import('./pages/estoque/kardex/kardex.module').then(m => m.KardexModule)
  },
  {
    path:'cadastroprodutos', loadChildren: () => import('./pages/estoque/cadastro-produtos/cadastro-produtos.module').then(m => m.CadastroProdutosModule)
  },
  {
    path:'cadastrofornecedor', loadChildren: () => import('./pages/estoque/cadastro-fornecedor/cadastro-fornecedor.module').then(m => m.CadastroFornecedorModule)
  },
  {
    path:'comercial', loadChildren: () => import('./pages/comercial/comercial.module').then(m => m.ComercialModule)
  },
  {
    path:'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
