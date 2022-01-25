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
    this.criarTabela();
  }

  listaCliente = myGlobals.listaClientes;

  criarTabela(){
    var self = this;
    this.listaCliente.forEach(function(e) {
      var obj = e;

      let tabela = document.querySelector('table');
      let linhaTabela= document.createElement('tr');

      linhaTabela.className = 'linha';

      tabela.appendChild(linhaTabela);

      let colunaCodigo = document.createElement('td');
      let colunaNome = document.createElement('td');
      let colunaIdade = document.createElement('td');
      let botaoEditar = document.createElement('button');
      let botaoRemover = document.createElement('button');

      linhaTabela.appendChild(colunaCodigo);
      linhaTabela.appendChild(colunaNome);
      linhaTabela.appendChild(colunaIdade);
      linhaTabela.appendChild(botaoEditar);
      linhaTabela.appendChild(botaoRemover);

      botaoEditar.className = 'botao';
      botaoRemover.className = 'botao';
      colunaCodigo.className = 'coluna';
      colunaNome.className = 'coluna';
      colunaIdade.className = 'coluna';

      botaoEditar.innerText = 'Editar Cliente';
      botaoRemover.innerText = 'Remover Cliente';
      colunaCodigo.innerText = e.codigo;
      colunaNome.innerText = e.nome;
      colunaIdade.innerText = e.idade;

      botaoRemover.onclick = function(e){
        tabela.removeChild(linhaTabela);

        var contagem = 0;
        self.listaCliente.forEach(function (e) {

          if (obj.codigo == e.codigo) {
            myGlobals.listaClientes.splice(contagem, 1);
          }
          contagem++;
        })
      }

      botaoEditar.onclick = function(e){
        self.router.navigate(['/pagina-principal/clientes/', obj.codigo]);
      }
    })
  }

  addCliente(){
    this.router.navigate(['/pagina-principal/clientes/',0])
  }

  voltarPrincipal(){
    this.router.navigate(['/pagina-principal']);
  }

}
