export interface form {
  id?: number | string;
  nombre: string;
  cantidad: string;
  fechaRegistro: Date | string;
  usuario: {
    id: number | string;
  };
}
