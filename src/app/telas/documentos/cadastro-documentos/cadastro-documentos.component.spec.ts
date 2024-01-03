import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDocumentosComponent } from './cadastro-documentos.component';

describe('CadastroDocumentosComponent', () => {
  let component: CadastroDocumentosComponent;
  let fixture: ComponentFixture<CadastroDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroDocumentosComponent]
    });
    fixture = TestBed.createComponent(CadastroDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
