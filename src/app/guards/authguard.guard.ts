import { LoginModel } from 'src/app/models/login.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  usuario!: LoginModel | null;
  token!: String | undefined;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  constructor(
    private _loginService: LoginService,
  ) {
    this._loginService.login.subscribe(usuario => {
      this.usuario = usuario;
      this.token = this.usuario?.token;
    });
   }
  
}
