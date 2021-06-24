export interface form {
  nombre: string;
  cantidad: string;
  fechaRegistro: Date | string;
  usuario: {
    id: number | string;
  };
}
