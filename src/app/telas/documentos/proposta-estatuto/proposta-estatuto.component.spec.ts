import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaEstatutoComponent } from './proposta-estatuto.component';

describe('PropostaEstatutoComponent', () => {
  let component: PropostaEstatutoComponent;
  let fixture: ComponentFixture<PropostaEstatutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropostaEstatutoComponent]
    });
    fixture = TestBed.createComponent(PropostaEstatutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
