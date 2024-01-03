import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoSaldoComponent } from './extrato-saldo.component';

describe('ExtratoSaldoComponent', () => {
  let component: ExtratoSaldoComponent;
  let fixture: ComponentFixture<ExtratoSaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtratoSaldoComponent]
    });
    fixture = TestBed.createComponent(ExtratoSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
