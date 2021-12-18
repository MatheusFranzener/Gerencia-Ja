import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  funcaoCliente(){
    this.router.navigate(['/pagina-principal/clientes/'])
  }

  funcaoProdutos(){
    this.router.navigate(['/pagina-principal/produtos/'])
  }

  funcaoPedidos(){
    this.router.navigate(['/pagina-principal/pedido/'])
  }

}
