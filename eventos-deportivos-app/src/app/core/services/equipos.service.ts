import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/equipos/');
  }
  public getById(id: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/equipos/' + id);
  }
  public getJugadores(id: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/equipos/' + id + '/jugadores');
  }
}
