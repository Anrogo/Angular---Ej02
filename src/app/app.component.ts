import { Component } from '@angular/core';
import { LoginModel } from './models/login.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  title = 'Ejercicio02';

  usuario!: LoginModel | null;

  constructor(
    private _loginService: LoginService,
  ){
    _loginService.login.subscribe(usuario => this.usuario = usuario);
   }

   hayUsuario(): boolean{
    return this.usuario != null;
   }

   logout(): void {
     this._loginService.performLogout();
   }

}
