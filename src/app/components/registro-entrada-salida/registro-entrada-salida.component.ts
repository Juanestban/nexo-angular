import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntradaSalida } from 'src/app/models/EntadaSalida';

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

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  onOpen(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  onClose(close: any) {
    close();
  }

  cambiarEstado() {
    this.esEntradaOSalida = !this.esEntradaOSalida;
  }
}
