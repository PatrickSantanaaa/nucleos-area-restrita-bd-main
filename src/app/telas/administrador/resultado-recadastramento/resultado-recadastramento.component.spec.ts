import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoRecadastramentoComponent } from './resultado-recadastramento.component';

describe('ResultadoRecadastramentoComponent', () => {
  let component: ResultadoRecadastramentoComponent;
  let fixture: ComponentFixture<ResultadoRecadastramentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoRecadastramentoComponent]
    });
    fixture = TestBed.createComponent(ResultadoRecadastramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
