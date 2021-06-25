import { TestBed } from '@angular/core/testing';

import { RegistEntSalService } from './regist-ent-sal.service';

describe('RegistEntSalService', () => {
  let service: RegistEntSalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistEntSalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
