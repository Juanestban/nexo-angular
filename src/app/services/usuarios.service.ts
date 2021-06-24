import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { form } from '../models/formulario';
import { UsuariosPaginado } from '../models/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  URL = '/api/v1';

  constructor(private http: HttpClient) {}

  obtenerTodo(): Observable<UsuariosPaginado> {
    return this.http.get<UsuariosPaginado>(`${this.URL}/usuario`);
  }

  crearMercancia(mercancia: form): Observable<any> {
    return this.http.post(`${this.URL}/mercancia`, mercancia);
  }
}
