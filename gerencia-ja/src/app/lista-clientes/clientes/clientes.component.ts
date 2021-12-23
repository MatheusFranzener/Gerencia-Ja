import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from "../../globals"

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
  }

  listaCliente = myGlobals.listaClientes;

  addCliente(){
    this.router.navigate(['/pagina-principal/clientes/cliente'])
  }

  voltarPrincipal(){
    this.router.navigate(['/pagina-principal']);
  }

}
