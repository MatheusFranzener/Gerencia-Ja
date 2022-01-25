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
    this.criarTabela();
  }         
  
  listaProduto = myGlobals.listaProdutos;

  criarTabela(){
    var self = this;
    this.listaProduto.forEach(function(e){
      var obj = e;

      let tabela = document.querySelector('table');
      let linhaTabela= document.createElement('tr');

      linhaTabela.className = 'linha';

      tabela.appendChild(linhaTabela);

      let colunaCodigo = document.createElement('td');
      let colunaNome = document.createElement('td');
      let colunaPreco = document.createElement('td');
      let botaoEditar = document.createElement('button');
      let botaoRemover = document.createElement('button');

      linhaTabela.appendChild(colunaCodigo);
      linhaTabela.appendChild(colunaNome);
      linhaTabela.appendChild(colunaPreco);
      linhaTabela.appendChild(botaoEditar);
      linhaTabela.appendChild(botaoRemover);

      botaoEditar.className = 'botao';
      botaoRemover.className = 'botao';
      colunaCodigo.className = 'coluna';
      colunaNome.className = 'coluna';
      colunaPreco.className = 'coluna';

      botaoEditar.innerText = 'Editar Produto';
      botaoRemover.innerText = 'Remover Produto';
      colunaCodigo.innerText = e.codigo;
      colunaNome.innerText = e.nome;
      colunaPreco.innerText = e.preco;

      botaoRemover.onclick = function(e){
        tabela.removeChild(linhaTabela);

        var contagem = 0;
        self.listaProduto.forEach(function (e) {

          if (obj.codigo == e.codigo) {
            myGlobals.listaProdutos.splice(contagem, 1);
          }
          contagem++;
        })
      }

      botaoEditar.onclick = function(e){
        self.router.navigate(['/pagina-principal/produtos/', obj.codigo]);
      }

    })
    }

  voltarPrincipal(){
    this.router.navigate(['/pagina-principal']);
  }

  addProduto(){
    this.router.navigate(['/pagina-principal/produtos/',0]);
  }

  

}
