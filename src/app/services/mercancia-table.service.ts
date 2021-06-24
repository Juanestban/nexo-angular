import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Mercancia } from '../models/mercancia';
import { MERCANCIAS } from '../models/testMercancia';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from '../directive/sortable.directive';

interface SearchResult {
  mercancias: Mercancia[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function matches(country: Mercancia, term: string, pipe: PipeTransform) {
  return (
    country.name.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(country.area).includes(term) ||
    pipe.transform(country.population).includes(term)
  );
}

@Injectable({ providedIn: 'root' })
export class MercanciaService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _mercancias$ = new BehaviorSubject<Mercancia[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._mercancias$.next(result.mercancias);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get mercancias$() {
    return this._mercancias$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
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
    let mercancias = MERCANCIAS;

    // 2. filter
    mercancias = mercancias.filter((mercancia) =>
      matches(mercancia, searchTerm, this.pipe)
    );
    const total = mercancias.length;

    // 3. paginate
    mercancias = mercancias.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ mercancias, total });
  }
}
