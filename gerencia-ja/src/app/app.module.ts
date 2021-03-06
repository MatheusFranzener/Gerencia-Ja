import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import CheckLogged from './checkLogged.canactivate';

import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';
import { PrincipalModule } from './principal/principal.module';
import { GerenciamentoPedidoModule } from './gerenciamento-pedido/gerenciamento-pedido.module';
import { ListaClientesModule } from './lista-clientes/lista-clientes.module';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
      path: '',
      component: TelaLoginComponent,
      canActivate: []
    }
  ]),
    BrowserModule,
    FormsModule,
    PrincipalModule,
    GerenciamentoPedidoModule,
    ListaClientesModule
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
