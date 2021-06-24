export interface Usuarios {
  id: number | string;
  nombre: string;
  edad: number | string;
  fechaIngreso: string | Date;
  cargos: {
    id: number | string;
    nombre: string;
  };
}

export interface UsuariosPaginado {
  totalElementos: number | string;
  totalPaginas: number | string;
  cantidadElementosPagina: number | string;
  primeraPagina: boolean;
  ultimaPagina: boolean;
  contenido: Usuarios[];
}
