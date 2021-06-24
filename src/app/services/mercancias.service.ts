import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paginado } from '../models/mercancia';

@Injectable({
  providedIn: 'root',
})
export class MercanciasService {
  URL = '/api/v1';

  constructor(private http: HttpClient) {}

  obtenerTodo(): Observable<paginado> {
    return this.http.get<paginado>(`${this.URL}/mercancia`);
  }
}
