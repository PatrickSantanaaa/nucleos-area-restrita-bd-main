import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjuntamentoCondutaComponent } from './ajuntamento-conduta.component';

describe('AjuntamentoCondutaComponent', () => {
  let component: AjuntamentoCondutaComponent;
  let fixture: ComponentFixture<AjuntamentoCondutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjuntamentoCondutaComponent]
    });
    fixture = TestBed.createComponent(AjuntamentoCondutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
