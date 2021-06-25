export interface Cargos {
  id: number | string;
  nombre: string;
}

export interface PaginadoCargos {
  cantidadElementosPagina: number;
  primerPagina: boolean;
  totalElementos: number;
  totalPaginas: number;
  ultimaPagina: boolean;
  contenido: Cargos[];
}
