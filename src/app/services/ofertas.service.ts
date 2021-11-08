import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertaModel } from '../models/oferta.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppEndPoints } from '../endpoints.component';
import { LoginService } from './login.service';
import { LoginModel } from '../models/login.model';

const LOGIN_KEY = 'login';

@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    headers!: HttpHeaders;
    token!: LoginModel | null;

    constructor(
        private _http: HttpClient,
        private _loginService: LoginService
    ) {

    }
    //Method to get the token, that will validate the operations with the API
    getToken(): void {
        this.token = JSON.parse(<string>localStorage.getItem(LOGIN_KEY))['id_token'];
        console.log(this.token);
        if (this.token != null) {
            this.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            });
        } else {
            console.log('Error al cargar el token de usuario');
        }
    }

    //New register
    registerOferta(oferta: OfertaModel): Observable<OfertaModel> {
        this.getToken();
        let url = AppEndPoints.API;
        //console.log(oferta);
        return this
            ._http
            .post<OfertaModel>(url + '/ofertas', oferta, { headers: this.headers });
    }
    //Delete an existing record
    deleteOferta(id: number): Observable<any> {
        this.getToken();
        let url = AppEndPoints.API;
        return this._http
            .delete(url + '/ofertas/' + id, { headers: this.headers });
    }

}