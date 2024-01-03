import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecadastramentoComponent } from './recadastramento.component';

describe('RecadastramentoComponent', () => {
  let component: RecadastramentoComponent;
  let fixture: ComponentFixture<RecadastramentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecadastramentoComponent]
    });
    fixture = TestBed.createComponent(RecadastramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
