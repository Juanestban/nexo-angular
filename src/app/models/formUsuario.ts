export interface FormUsuario {
  nombre: string;
  edad: number | string;
  fechaIngreso: Date;
  cargo: {
    id: number | string;
    nombre: string;
  };
}
