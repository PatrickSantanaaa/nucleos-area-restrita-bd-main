import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticamenteExpostaComponent } from './politicamente-exposta.component';

describe('PoliticamenteExpostaComponent', () => {
  let component: PoliticamenteExpostaComponent;
  let fixture: ComponentFixture<PoliticamenteExpostaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticamenteExpostaComponent]
    });
    fixture = TestBed.createComponent(PoliticamenteExpostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
