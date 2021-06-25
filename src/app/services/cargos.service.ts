import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargos, PaginadoCargos } from '../models/Cargos';

@Injectable({
  providedIn: 'root',
})
export class CargosService {
  URL = '/api/v1/cargos';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<PaginadoCargos> {
    return this.http.get<PaginadoCargos>(this.URL);
  }

  crearCargo(cargo: Cargos): Observable<Cargos> {
    return this.http.post<Cargos>(this.URL, cargo);
  }
}
