import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import CheckLogged from './checkLogged.canactivate';

import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';


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
    PrincipalModule,
    FormsModule
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
