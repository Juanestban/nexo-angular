import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Mercancia } from '../../models/mercancia';
import { MercanciaService } from '../../services/mercancia-table.service';
import { NgbdSortableHeader } from '../../directive/sortable.directive';
import { MercanciasService } from 'src/app/services/mercancias.service';

@Component({
  selector: 'app-tabla-mercancias',
  templateUrl: './tabla-mercancias.component.html',
  styleUrls: ['./tabla-mercancias.component.css'],
  providers: [MercanciaService, DecimalPipe],
})
export class TablaMercanciasComponent implements OnInit {
  mercancias: Observable<Mercancia[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(
    public service: MercanciaService,
    private mercanciaService: MercanciasService
  ) {
    this.mercancias = service.mercancias$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    // this.mercanciaService.obtenerTodo().subscribe((res) => {
    //   console.log(res);
    //   this.mercancias = res.contenido;
    // });
  }
}
