import { LoginModel } from 'src/app/models/login.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  usuario!: LoginModel | null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.usuario != null){
        return true;
      } else {
        this.router.navigate(['/home']);
      }

    return this.usuario != null; // Cambiar esto para saber si estoy logado.
  }

  constructor(
    private _loginService: LoginService,
    private router: Router,
  ) {
    this._loginService.login.subscribe(usuario => {
      this.usuario = usuario;
    });
   }
  
}
