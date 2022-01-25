import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from "../../globals"

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
    this.clientes();
    this.produto();
    this.funcaoQtd();
  }


  status = "";
  codigoCliente = "";
  nomeCliente = "";
  codigoProduto = "";
  nomeProduto = "";
  valorTotal = 0;
  quantidade = 1;


  clientes(){
    myGlobals.listaClientes.forEach(function(e) {
      let select = document.getElementById('cliente');
      let opcao = document.createElement('option');
      opcao.innerText = e.nome;
      opcao.value = e.codigo;

      select.appendChild(opcao);
    })
  }

  produto(){
    myGlobals.listaProdutos.forEach(function(e) {
      let select = document.getElementById('produto');
      let opcao = document.createElement('option');
      opcao.innerText = e.nome;
      opcao.value = e.codigo;

      select.appendChild(opcao);
    })
  }

  select(codigo){
    var self = this
    self.status =  'Em aberto';
    myGlobals.listaClientes.forEach(function(e) {
      if(e.codigo == codigo){
        self.codigoCliente = e.codigo;
        self.nomeCliente = e.nome;
        
      }
    })
  }

  select2(codigo){
    var self = this
    myGlobals.listaProdutos.forEach(function(e) {
      if(e.codigo == codigo){
        self.codigoProduto = e.codigo;
        self.nomeProduto = e.nome;
        self.valorTotal = self.quantidade*e.preco;
      }
    })
   
  }

  funcaoQtd(){
    var self = this
    let qtdInput = document.querySelector('input');
    this.quantidade = parseInt(qtdInput.value);
    myGlobals.listaProdutos.forEach(function(e) {
      if(e.codigo == self.codigoProduto){
        self.valorTotal = self.quantidade*e.preco;
      }
    })
  }

  voltarPrincipal(){
    this.router.navigate(['/pagina-principal']);
  }

  finalizarOrçamento(){
    
  }

}
