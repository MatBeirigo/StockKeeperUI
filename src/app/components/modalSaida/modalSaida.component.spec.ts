import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSaidaComponent } from './modalSaida.component';

describe('ModalSaidaComponent', () => {
  let component: ModalSaidaComponent;
  let fixture: ComponentFixture<ModalSaidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSaidaComponent]
    });
    fixture = TestBed.createComponent(ModalSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
