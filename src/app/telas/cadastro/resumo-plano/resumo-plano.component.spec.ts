import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoPlanoComponent } from './resumo-plano.component';

describe('ResumoPlanoComponent', () => {
  let component: ResumoPlanoComponent;
  let fixture: ComponentFixture<ResumoPlanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumoPlanoComponent]
    });
    fixture = TestBed.createComponent(ResumoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
