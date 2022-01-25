import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import * as myGlobals from "../../globals"

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { 
    this.codigoProduto = route.snapshot.paramMap.get('codigo');
   }

  ngOnInit() {
    this.verificarProduto();
  }

  voltarProdutos(){
    this.router.navigate(['/pagina-principal/produtos'])
  }

  codigoProduto = "";
  nomeProduto = "";
  precoProduto = "";
  contagem = 0;

  verificarProduto(){
    var self = this
    myGlobals.listaProdutos.forEach(function(e) {
      if(e.codigo == self.codigoProduto){
        self.nomeProduto = e.nome;
        self.precoProduto = e.preco;
        self.contagem = 1;
      }
    })
  }

  editar(){
    var self = this;

    localStorage.setItem('codigoProduto', '')
    localStorage.setItem('nomeProduto', '')
    localStorage.setItem('precoProduto', '')

    myGlobals.listaProdutos.forEach(function(e) {
      if(e.codigo == self.codigoProduto){
        e.nome = self.nomeProduto;
        e.preco = self.precoProduto;
      }
    })
  }

  adicionarLista() {
    if(this.contagem == 1){
      this.editar()

      
    } else {
      myGlobals.listaProdutos.push({codigo: this.codigoProduto, nome: this.nomeProduto, preco: this.precoProduto});
      console.log(myGlobals.listaProdutos);
    }
    this.router.navigate(["/pagina-principal/produtos"]);
  }

}
