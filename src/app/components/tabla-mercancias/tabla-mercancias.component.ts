import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Mercancia } from '../../models/mercancia';
import { MercanciaService } from '../../services/mercancia-table.service';
import {
  NgbdSortableHeader,
  // SortEvent,
} from '../../directive/sortable.directive';

@Component({
  selector: 'app-tabla-mercancias',
  templateUrl: './tabla-mercancias.component.html',
  styleUrls: ['./tabla-mercancias.component.css'],
  providers: [MercanciaService, DecimalPipe],
})
export class TablaMercanciasComponent {
  mercancias$: Observable<Mercancia[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: MercanciaService) {
    this.mercancias$ = service.mercancias$;
    this.total$ = service.total$;
  }
}
