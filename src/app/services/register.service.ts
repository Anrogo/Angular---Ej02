import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertaModel } from '../models/oferta.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AppEndPoints } from '../endpoints.component';

@Injectable()
export class RegisterService {

   

    constructor(
        private _http: HttpClient
    ) { 
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYzNjIxMjk4Nn0.OkW62L5kRn6b6HNYoHNHK56xlyQQlFYAYwgEf6zu9vV2LxA2dEqqppGtaaiLa30CMhGEw1YHBHK7f2FKCKwwrQ');
    }

    sendNuevaOferta(oferta: OfertaModel): void {
        console.log(oferta);
        this.registerOferta(oferta);
    }

    registerOferta(oferta: OfertaModel): Observable<OfertaModel> {
        let url = AppEndPoints.API;
        console.log(oferta);
        return this
          ._http
          .post<OfertaModel>(`${url}/api/ofertas`, oferta);
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