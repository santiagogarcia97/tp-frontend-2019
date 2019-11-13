import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/partidos/');
  }
  public getFinalizados(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/partidos/?finalizado=true');
  }
  public getProximos(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/partidos/?finalizado=false');
  }
  public getById(id: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/partidos/' + id);
  }
  public getEventos(id: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/partidos/' + id + '/eventos');
  }
}
