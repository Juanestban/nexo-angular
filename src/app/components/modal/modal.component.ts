import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { form } from 'src/app/models/formulario';
import { Usuarios } from 'src/app/models/usuarios';
import { MercanciaService } from 'src/app/services/mercancia-table.service';
import { MercanciasService } from 'src/app/services/mercancias.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  formulario: form = {
    nombre: '',
    cantidad: '',
    fechaRegistro: new Date(),
    usuario: {
      id: '',
    },
  };
  usuarios: Usuarios[] = [];
  maxDate: Date = new Date();

  constructor(
    private modalService: NgbModal,
    private usuariosServicios: UsuariosService,
    private mercanciaTablaServicio: MercanciaService
  ) {}

  onOpen(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  ngOnInit(): void {
    this.usuariosServicios.obtenerTodo().subscribe((res) => {
      this.usuarios = res.contenido;
    });
  }

  onClose(close: any): void {
    this.formulario.fechaRegistro = this.formulario.fechaRegistro
      .toString()
      .replace(/\-/g, '/');
    this.usuariosServicios.crearMercancia(this.formulario).subscribe((res) => {
      console.log(res);
      this.mercanciaTablaServicio.obtenerTodoOtraVez();
      close();
    });
  }
}
