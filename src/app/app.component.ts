import { Component, OnInit } from '@angular/core';
import { LoginModel } from './models/login.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ejercicio02';

  usuario!: LoginModel | null;

  constructor(private loginService: LoginService) {
    loginService.login.subscribe(usuario => this.usuario = usuario);
  }

  ngOnInit(): void {
    this.loginService.login.subscribe(usuario => this.usuario = usuario);
  }

  hayUsuario(): boolean {
    return this.usuario != null;
  }

  logout():void{
    this.loginService.performLogout();
  }

}
