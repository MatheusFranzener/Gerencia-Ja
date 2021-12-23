import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from "../../globals"

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }         
  
  listaProduto = myGlobals.listaProdutos;

  voltarPrincipal(){
    this.router.navigate(['/pagina-principal']);
  }

  addProduto(){
    this.router.navigate(['/pagina-principal/produtos/produto'])
  }

}
