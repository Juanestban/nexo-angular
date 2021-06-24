import { TestBed } from '@angular/core/testing';

import { MercanciaTableService } from './mercancia-table.service';

describe('MercanciaTableService', () => {
  let service: MercanciaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercanciaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
