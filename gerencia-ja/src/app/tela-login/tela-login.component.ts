import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  user =  '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logar(){
    localStorage.setItem('USER',this.user);
    localStorage.setItem('PASSWORD',this.password);
    this.router.navigate(['/pagina-principal/'])
  }

}
