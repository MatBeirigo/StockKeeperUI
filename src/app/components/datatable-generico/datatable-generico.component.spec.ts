import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableGenericoComponent } from './datatable-generico.component';

describe('DatatableGenericoComponent', () => {
  let component: DatatableGenericoComponent;
  let fixture: ComponentFixture<DatatableGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableGenericoComponent]
    });
    fixture = TestBed.createComponent(DatatableGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
