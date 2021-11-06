import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppEndPoints } from '../endpoints.component';
import { LoginModel } from '../models/login.model';
import {map} from "rxjs/operators";

const LOGIN_KEY = 'login';

@Injectable()
export class LoginService {

    private loginModelBehaviorSubject: BehaviorSubject<LoginModel | null>;
    public login: Observable<LoginModel | null>;

    constructor(
        private http: HttpClient,
        private route: Router,
    ) { 
        //Siempre que tengamos el token de login se cargará automáticamente
        this.loginModelBehaviorSubject = new BehaviorSubject<LoginModel | null>(JSON.parse(<string>localStorage.getItem(LOGIN_KEY)));
        //Cargamos el observable de login
        this.login = this.loginModelBehaviorSubject.asObservable();
    }

    //Hacemos login y guardamos en el almacenamiento local el token
    performLogin(data: LoginModel): Observable<LoginModel> {
        return this
        .http
        .post<LoginModel>(AppEndPoints.API+'/authenticate', data)
        .pipe(map(retornoAPI =>{
            //console.log('Login OK: ' + JSON.stringify(retornoAPI))
            this.loginModelBehaviorSubject.next(retornoAPI);
            localStorage.setItem(LOGIN_KEY, JSON.stringify(retornoAPI));
            return retornoAPI;
        }));
    } 

    //Hacemos logout borrando el token almacenado
    performLogout(): void {
        localStorage.removeItem(LOGIN_KEY);
        this.loginModelBehaviorSubject.next(null);
        this.route.navigate(['/login']);
      }
}