import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from "../../globals"

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
  }

  addPedido(){
    this.router.navigate(['/pagina-principal/pedidos/',0])
  }

  voltarPrincipal(){
    this.router.navigate(['/pagina-principal']);
  }

}
