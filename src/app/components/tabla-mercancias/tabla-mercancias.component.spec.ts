import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMercanciasComponent } from './tabla-mercancias.component';

describe('TablaMercanciasComponent', () => {
  let component: TablaMercanciasComponent;
  let fixture: ComponentFixture<TablaMercanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMercanciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMercanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
