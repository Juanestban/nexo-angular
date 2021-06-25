import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntradaSalida, PaginadoEntradaSalida } from '../models/EntadaSalida';

@Injectable({
  providedIn: 'root',
})
export class RegistEntSalService {
  URL = '/api/v1';

  constructor(private http: HttpClient) {}

  // entradas
  obtenerTodoEntradas(): Observable<PaginadoEntradaSalida> {
    return this.http.get<PaginadoEntradaSalida>(`${this.URL}/ingreso`);
  }

  crearEntrada(entrada: EntradaSalida): Observable<EntradaSalida> {
    return this.http.post<EntradaSalida>(`${this.URL}/ingreso`, entrada);
  }

  // salidas
  obtenerTodoSalidas(): Observable<PaginadoEntradaSalida> {
    return this.http.get<PaginadoEntradaSalida>(`${this.URL}/salida`);
  }

  crearSalida(salida: EntradaSalida): Observable<EntradaSalida> {
    return this.http.post<EntradaSalida>(`${this.URL}/salida`, salida);
  }
}
