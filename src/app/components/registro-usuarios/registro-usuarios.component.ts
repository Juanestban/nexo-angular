import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cargos } from 'src/app/models/Cargos';
import { FormUsuario } from 'src/app/models/formUsuario';
import { Usuarios } from 'src/app/models/usuarios';
import { CargosService } from 'src/app/services/cargos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
// import { CargosService } from 'src/app/services/cargos.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
  providers: [CargosService, UsuariosService, NgbModal],
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
  todosCargos: Cargos[] = [];

  constructor(
    private modalService: NgbModal,
    private cargosServicios: CargosService,
    private usuarioServicios: UsuariosService
  ) {}

  ngOnInit(): void {
    this.obtenerTodosLosCargos();
  }

  obtenerTodosLosCargos() {
    this.cargosServicios.obtenerTodos().subscribe((res) => {
      this.todosCargos = res.contenido;
    });
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  crearCargo() {
    this.cargosServicios
      .crearCargo(this.registroUsuario.cargo)
      .subscribe((res) => {
        console.log('finalizado', res);
        this.obtenerTodosLosCargos();
        this.registroUsuario.cargo.nombre = '';
      });
  }

  onSubmit(onClose: any) {
    this.registroUsuario.fechaIngreso = this.registroUsuario.fechaIngreso
      .toString()
      .replace(/\-/g, '/');
    this.usuarioServicios
      .crearUsuario(this.registroUsuario)
      .subscribe((res) => {
        console.log('creado', res);
        onClose();
      });
  }
}
