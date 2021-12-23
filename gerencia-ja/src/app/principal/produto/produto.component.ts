import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from "../../globals"

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  voltarProdutos(){
    this.router.navigate(['/pagina-principal/produtos'])
  }

  codigoProduto = "";
  nomeProduto = "";
  precoProduto = "";


  adicionarLista() {
    myGlobals.listaProdutos.push({codigo: this.codigoProduto, nome: this.nomeProduto, preco: this.precoProduto});
    console.log(myGlobals.listaProdutos);
    this.router.navigate(["/pagina-principal/produtos"]);
  }

}
