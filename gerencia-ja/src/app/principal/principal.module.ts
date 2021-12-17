import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaPrincipalComponent, PedidosComponent, ClientesComponent, ProdutosComponent]
})
export class PrincipalModule { }
