import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import * as myGlobals from "../../globals"

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) {
    this.codigoCliente = route.snapshot.paramMap.get('codigo');
   }

  ngOnInit() {
    this.verificarProduto();
  }

  voltarClientes(){
    this.router.navigate(['/pagina-principal/clientes'])
  }

  codigoCliente = "";
  nomeCliente = "";
  idadeCliente = "";
  contagem = 0;

  verificarProduto(){
    var self = this
    myGlobals.listaClientes.forEach(function(e) {
      if(e.codigo == self.codigoCliente){
        self.nomeCliente = e.nome;
        self.idadeCliente = e.idade;
        self.contagem = 1;
      }
    })
  }

  editar(){
    var self = this;

    localStorage.setItem('codigoCliente', '')
    localStorage.setItem('nomeCliente', '')
    localStorage.setItem('idadeCliente', '')

    myGlobals.listaClientes.forEach(function(e) {
      if(e.codigo == self.codigoCliente){
        e.nome = self.nomeCliente;
        e.idade = self.idadeCliente;
      }
    })
  }


  adicionarLista() {
    if(this.contagem == 1){
      this.editar()
    } else {
      myGlobals.listaClientes.push({codigo: this.codigoCliente, nome: this.nomeCliente, idade: this.idadeCliente});
      console.log(myGlobals.listaClientes);
    }
        
    this.router.navigate(["/pagina-principal/clientes"]);
  }

}
