import { Observable } from 'rxjs';

export interface Mercancia {
  id: number;
  nombre: string;
  usuario: {
    id: number;
    nombre: string;
  };
  cantidad: number;
  fechaRegistro: Date;
}

export interface paginado {
  cantidadElementosPagina: number;
  primerPagina: boolean;
  totalElementos: number;
  totalPaginas: number;
  ultimaPagina: boolean;
  contenido: Mercancia[];
}
