import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import CheckLogged from '../checkLogged.canactivate';
import { ClientesComponent } from '../lista-clientes/clientes/clientes.component';
import { ClienteComponent } from '../lista-clientes/cliente/cliente.component';
import { PedidoComponent } from '../gerenciamento-pedido/pedido/pedido.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "pagina-principal", canActivate: [CheckLogged], children: [
      { path: "", component: PaginaPrincipalComponent },
      {
        path: "produtos", children: [
          { path: "", component: ProdutosComponent },
          { path: ":codigo", component: ProdutoComponent }
        ]
      },
      {
        path: "clientes", children: [
          { path: "", component: ClientesComponent },
          { path: ":id", component: ClienteComponent }
        ]
      },
      { path: "pedido", component: PedidoComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [PaginaPrincipalComponent, ProdutosComponent, ProdutoComponent],
  exports: [PaginaPrincipalComponent, ProdutosComponent, ProdutoComponent],
  providers: [CheckLogged]
})
export class PrincipalModule { }
