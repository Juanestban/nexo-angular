import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Mercancia } from '../../models/mercancia';
import { MercanciaService } from '../../services/mercancia-table.service';
import { NgbdSortableHeader } from '../../directive/sortable.directive';
import { MercanciasService } from 'src/app/services/mercancias.service';
import { form } from 'src/app/models/formulario';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-mercancias',
  templateUrl: './tabla-mercancias.component.html',
  styleUrls: ['./tabla-mercancias.component.css'],
  providers: [MercanciaService, DecimalPipe],
})
export class TablaMercanciasComponent implements OnInit {
  mercancias: Observable<Mercancia[]>;
  total$: Observable<number>;
  editarMercancia: form | Mercancia = {
    nombre: '',
    cantidad: '',
    fechaRegistro: new Date(),
    usuario: {
      id: '',
    },
  };
  usuarios: Usuarios[] = [];

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(
    private modalService: NgbModal,
    public service: MercanciaService,
    private usuariosServicios: UsuariosService,
    private mercanciaService: MercanciasService
  ) {
    this.mercancias = service.mercancias$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.usuariosServicios.obtenerTodo().subscribe((res) => {
      this.usuarios = res.contenido;
    });
  }

  onOpen(content: any, mercancia: Mercancia) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.editarMercancia = mercancia;
  }

  editMercancia(close: any) {
    this.mercanciaService
      .editarMercancia(this.editarMercancia)
      .subscribe((res) => {
        console.log('final - edited', res);
        this.service.obtenerTodoOtraVez();
      });
    close();
  }

  eminarMercancia(idMercancia: number | string): any {
    this.mercanciaService
      .eliminarMercancia(idMercancia, this.editarMercancia.usuario.id)
      .subscribe((res) => {
        console.log('final', res);
        this.service.obtenerTodoOtraVez();
      });
  }
}
