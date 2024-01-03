import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoresDesligamentoComponent } from './simuladores-desligamento.component';

describe('SimuladoresDesligamentoComponent', () => {
  let component: SimuladoresDesligamentoComponent;
  let fixture: ComponentFixture<SimuladoresDesligamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimuladoresDesligamentoComponent]
    });
    fixture = TestBed.createComponent(SimuladoresDesligamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
