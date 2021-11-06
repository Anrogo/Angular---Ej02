import { LoginModel } from 'src/app/models/login.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario!: LoginModel | null;

  constructor(
    private _loginService: LoginService,
  ){
    _loginService.login.subscribe(usuario => this.usuario = usuario);
   }

   ngOnInit(): void {}

   hayUsuario(): boolean{
    return this.usuario != null;
   }

   logout(): void {
     this._loginService.performLogout();
   }

}
