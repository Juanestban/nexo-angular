import { TestBed } from '@angular/core/testing';

import { MercanciasService } from './mercancias.service';

describe('MercanciasService', () => {
  let service: MercanciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercanciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
