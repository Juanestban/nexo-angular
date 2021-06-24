import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { form } from '../models/formulario';
import { Mercancia, paginado } from '../models/mercancia';

@Injectable({
  providedIn: 'root',
})
export class MercanciasService {
  URL = '/api/v1/mercancia';

  constructor(private http: HttpClient) {}

  obtenerTodo(): Observable<paginado> {
    return this.http.get<paginado>(this.URL);
  }

  editarMercancia(mercancia: Mercancia | form): Observable<any> {
    return this.http.put(`${this.URL}/${mercancia.id}`, mercancia);
  }

  eliminarMercancia(
    idMercancia: number | string,
    idUsuario: number | string
  ): Observable<any> {
    return this.http.delete(`${this.URL}/${idMercancia}/${idUsuario}`);
  }
}
