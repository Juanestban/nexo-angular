import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntradaSalidaComponent } from './registro-entrada-salida.component';

describe('RegistroEntradaSalidaComponent', () => {
  let component: RegistroEntradaSalidaComponent;
  let fixture: ComponentFixture<RegistroEntradaSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEntradaSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEntradaSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
