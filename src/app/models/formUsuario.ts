export interface FormUsuario {
  nombre: string;
  edad: number | string;
  fechaIngreso: Date | string;
  cargo: {
    id: number | string;
    nombre: string;
  };
}
