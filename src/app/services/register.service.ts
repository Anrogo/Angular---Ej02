import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from '../models/oferta';
import { HttpClient} from '@angular/common/http';
import { AppEndPoints } from '../endpoints.component';

@Injectable()
export class RegisterService {

    constructor(
        private _http: HttpClient
    ) { 
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYzNjIwMjQ2MH0.NqCqcPgrOyoYu750Yu-PZC2q-44-AeOVhp2tk_gHYdLuOjlXNy4p3TXQxzVetgPjWWsN5rbWF1EAC8J3RZ4-9Q');
    }

    sendNuevaOferta(oferta: Oferta): void {
        console.log(oferta);
        this.registerOferta(oferta);
    }

    registerOferta(oferta: Oferta): Observable<any> {
        let url = AppEndPoints.API;
        return this._http
          .post<any>(`${url}/api/ofertas`, oferta, 
          {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYzNjIwMjQ2MH0.NqCqcPgrOyoYu750Yu-PZC2q-44-AeOVhp2tk_gHYdLuOjlXNy4p3TXQxzVetgPjWWsN5rbWF1EAC8J3RZ4-9Q'
            }
        }
          );
    }

}