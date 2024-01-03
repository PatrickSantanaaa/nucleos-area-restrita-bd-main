import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoPlanoComponent } from './gerenciamento-plano.component';

describe('GerenciamentoPlanoComponent', () => {
  let component: GerenciamentoPlanoComponent;
  let fixture: ComponentFixture<GerenciamentoPlanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciamentoPlanoComponent]
    });
    fixture = TestBed.createComponent(GerenciamentoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
