import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertaModel } from '../models/oferta.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AppEndPoints } from '../endpoints.component';

@Injectable()
export class RegisterService {

   headers: HttpHeaders;

    constructor(
        private http: HttpClient
    ) { 
        this.headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYzNjMwMDM2Nn0.C4IkhNb1zo48HoUXN2jByBtQqjHWlulw6p2UUZ5kxG9xgC2jOOWKGAKnphIkKQBnYOmtPzrJESht__I4UEGQFw' 
          });
    }

    sendNuevaOferta(oferta: OfertaModel): void {
        console.log(oferta);
        this.registerOferta(oferta);
    }

    registerOferta(oferta: OfertaModel): Observable<OfertaModel> {
        let url = AppEndPoints.API;
        console.log(oferta);
        return this
          .http
          .post<OfertaModel>(url+'/ofertas', oferta, {headers: {'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYzNjMwMDM2Nn0.C4IkhNb1zo48HoUXN2jByBtQqjHWlulw6p2UUZ5kxG9xgC2jOOWKGAKnphIkKQBnYOmtPzrJESht__I4UEGQFw'}});
    }

/*
    registerOferta(oferta: Oferta): Observable<Oferta> {
        let url = AppEndPoints.API;
        return this._http
          .post<Oferta>(`${url}/api/ofertas`, JSON.stringify(oferta), 
          {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYzNjIxMjk4Nn0.OkW62L5kRn6b6HNYoHNHK56xlyQQlFYAYwgEf6zu9vV2LxA2dEqqppGtaaiLa30CMhGEw1YHBHK7f2FKCKwwrQ'
            }
        }
          );
    }
*/

}