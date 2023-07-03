import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEstoqueComponent } from './ficha-estoque.component';

describe('FichaEstoqueComponent', () => {
  let component: FichaEstoqueComponent;
  let fixture: ComponentFixture<FichaEstoqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaEstoqueComponent]
    });
    fixture = TestBed.createComponent(FichaEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
