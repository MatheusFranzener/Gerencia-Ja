import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from "../../globals"

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  voltarClientes(){
    this.router.navigate(['/pagina-principal/clientes'])
  }

  codigoCliente = "";
  nomeCliente = "";
  idadeCliente = "";


  adicionarLista() {
    myGlobals.listaClientes.push({codigo: this.codigoCliente, nome: this.nomeCliente, preco: this.idadeCliente});
    console.log(myGlobals.listaClientes);
    this.router.navigate(["/pagina-principal/clientes"]);
  }

}
