export interface EntradaSalida {
  cantidad: number | string;
  fechaIngreso: Date | string;
  mercancia: {
    id: number | string;
    nombre: string;
    cantidad: number | string;
    fechaRegistro: Date;
  };
}

export interface PaginadoEntradaSalida {
  cantidadElementosPagina: number;
  primerPagina: boolean;
  totalElementos: number;
  totalPaginas: number;
  ultimaPagina: boolean;
  contenido: EntradaSalida[];
}
