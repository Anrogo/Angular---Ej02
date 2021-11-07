import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEndPoints } from '../endpoints.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient,
  ) { 

  }

  //Get all records
  getOfertas(): Observable<any> {
    let url = AppEndPoints.API + '/ofertas';
    return this._http.get(url);
  }
  //Get an record by id
  getOferta(id: number): Observable<any> {
    let url = AppEndPoints.API + '/ofertas/' + id;
    return this._http.get(url);
  }

}
