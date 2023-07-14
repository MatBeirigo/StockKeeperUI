import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEntradaComponent } from './modalEntrada.component';

describe('ModalEntradaComponent', () => {
  let component: ModalEntradaComponent;
  let fixture: ComponentFixture<ModalEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEntradaComponent]
    });
    fixture = TestBed.createComponent(ModalEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
