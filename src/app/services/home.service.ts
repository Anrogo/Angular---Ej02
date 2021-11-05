import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEndPoints } from '../endpoints.component';

@Injectable()
export class HomeService {



  constructor(
    private _http: HttpClient,
  ) { 

  }

  getOfertas(): Observable<any> {
    let url = AppEndPoints.API + '/api/ofertas';
    return this._http.get(url);
  }

  getOferta(id: number): Observable<any> {
    let url = AppEndPoints.API + '/api/ofertas/' + id;
    return this._http.get(url);
  }

}
