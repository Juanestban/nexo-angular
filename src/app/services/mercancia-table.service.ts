import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Mercancia } from '../models/mercancia';
import { debounceTime, delay, switchMap } from 'rxjs/operators';
import { MercanciasService } from './mercancias.service';

interface SearchResult {
  mercancias: Mercancia[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

function matches(mercancia: Mercancia, term: string) {
  return mercancia.nombre.toLowerCase().includes(term.toLowerCase());
}

@Injectable({ providedIn: 'root' })
export class MercanciaService {
  private _search$ = new Subject<void>();
  private _mercancias$ = new BehaviorSubject<Mercancia[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private mercanciaPeticion: Mercancia[] = [];

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
  };

  constructor(private mercanciaService: MercanciasService) {
    this._search$.next();
    this.mercanciaService.obtenerTodo().subscribe((res) => {
      this.mercanciaPeticion = res.contenido;
      this._mercancias$.next(res.contenido);
      this._search$
        .pipe(
          debounceTime(200),
          switchMap(() => this._search())
          // delay(200)
        )
        .subscribe((result) => {
          this._mercancias$.next(result.mercancias);
          this._total$.next(result.total);
        });
    });
  }

  get mercancias$() {
    return this._mercancias$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { pageSize, page, searchTerm } = this._state;

    // 1. sort
    let mercancias: Mercancia[] = this.mercanciaPeticion;

    // 2. filter
    mercancias = mercancias.filter((mercancia) =>
      matches(mercancia, searchTerm)
    );
    console.log(mercancias);
    const total = mercancias.length;

    // 3. paginate
    mercancias = mercancias.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );

    return of({ mercancias, total });
  }

  public obtenerTodoOtraVez() {
    this.mercanciaService.obtenerTodo().subscribe((res) => {
      this.mercanciaPeticion = res.contenido;
      this._mercancias$.next(res.contenido);
    });
  }
}
