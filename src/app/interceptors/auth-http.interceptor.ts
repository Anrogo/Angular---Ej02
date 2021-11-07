import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { LoginService } from '../services/login.service';
import { finalize, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptor implements HttpInterceptor {

  usuario!: LoginModel | null;
  token!: String | undefined;

  constructor(
    private loginService: LoginService,
  ) {
    this.loginService.login.subscribe(usuario => {
      this.usuario = usuario;
      this.token = this.usuario?.token;
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token !== undefined) { // Existe usuario
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}` // Añado token
        }
      });
    }

    return next.handle(request)
    .pipe(
      tap(e => {}),
      finalize(() => {
      console.log(request.url + `(metodo ${request.method}) ha finalizado`);
    })); // Ejecutar la peticoin
  }
}
