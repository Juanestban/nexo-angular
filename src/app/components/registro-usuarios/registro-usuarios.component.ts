import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cargos } from 'src/app/models/Cargos';
import { FormUsuario } from 'src/app/models/formUsuario';
import { Usuarios } from 'src/app/models/usuarios';
// import { CargosService } from 'src/app/services/cargos.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
  // mirar los providers/servicios
})
export class RegistroUsuariosComponent implements OnInit {
  registroUsuario: FormUsuario = {
    nombre: '',
    edad: '',
    fechaIngreso: new Date(),
    cargo: {
      id: '',
      nombre: '',
    },
  };
  // posiblemente no iria
  usuarios: Usuarios[] = [];
  todosCargos: Cargos[] = [];

  constructor(
    private modalService: NgbModal // private cargosServicios: CargosService
  ) {}

  ngOnInit(): void {
    // obtener los cargos
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  onSubmit(onClose: any) {
    console.log('submit', this.registroUsuario);
    onClose();
  }
}
