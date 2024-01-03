import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSaldoDevedorComponent } from './consulta-saldo-devedor.component';

describe('ConsultaSaldoDevedorComponent', () => {
  let component: ConsultaSaldoDevedorComponent;
  let fixture: ComponentFixture<ConsultaSaldoDevedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaSaldoDevedorComponent]
    });
    fixture = TestBed.createComponent(ConsultaSaldoDevedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
