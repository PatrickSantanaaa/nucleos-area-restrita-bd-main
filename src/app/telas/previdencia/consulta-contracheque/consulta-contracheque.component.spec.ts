import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaContrachequeComponent } from './consulta-contracheque.component';

describe('ConsultaContrachequeComponent', () => {
  let component: ConsultaContrachequeComponent;
  let fixture: ComponentFixture<ConsultaContrachequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaContrachequeComponent]
    });
    fixture = TestBed.createComponent(ConsultaContrachequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
