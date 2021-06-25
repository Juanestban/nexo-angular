import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntradaSalida } from 'src/app/models/EntadaSalida';
import { Mercancia } from 'src/app/models/mercancia';
import { MercanciasService } from 'src/app/services/mercancias.service';
import { RegistEntSalService } from 'src/app/services/regist-ent-sal.service';

@Component({
  selector: 'app-registro-entrada-salida',
  templateUrl: './registro-entrada-salida.component.html',
  styleUrls: ['./registro-entrada-salida.component.css'],
})
export class RegistroEntradaSalidaComponent implements OnInit {
  formEntSal: EntradaSalida = {
    cantidad: '',
    fechaIngreso: new Date(),
    mercancia: {
      id: '',
      nombre: '',
      cantidad: '',
      fechaRegistro: new Date(),
    },
  };
  entradasSalidas: EntradaSalida[] = [];
  // true === entrada || false === salida
  esEntradaOSalida: boolean = true;
  mercancias: Mercancia[] = [];

  constructor(
    private modalService: NgbModal,
    private mercanciasServicios: MercanciasService,
    private entSalidaServiocios: RegistEntSalService
  ) {}

  ngOnInit(): void {
    this.mercanciasServicios.obtenerTodo().subscribe((res) => {
      this.mercancias = res.contenido;
    });
  }

  onOpen(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  cambiarEstado() {
    this.esEntradaOSalida = !this.esEntradaOSalida;
  }

  onSubmit(close: any): any {
    const cond = this.esEntradaOSalida;
    this.formEntSal.fechaIngreso = this.formEntSal.fechaIngreso
      .toString()
      .replace(/\-/g, '/');
    delete this.formEntSal.mercancia.nombre;
    delete this.formEntSal.mercancia.fechaRegistro;
    delete this.formEntSal.mercancia.cantidad;

    this.entSalidaServiocios[cond ? 'crearEntrada' : 'crearSalida'](
      this.formEntSal
    ).subscribe((res) => {
      console.log('finalizado entrada servicio', res);
      close();
    });
  }
}
