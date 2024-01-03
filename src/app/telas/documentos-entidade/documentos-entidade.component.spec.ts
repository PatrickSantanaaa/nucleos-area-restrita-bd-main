import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosEntidadeComponent } from './documentos-entidade.component';

describe('DocumentosEntidadeComponent', () => {
  let component: DocumentosEntidadeComponent;
  let fixture: ComponentFixture<DocumentosEntidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentosEntidadeComponent]
    });
    fixture = TestBed.createComponent(DocumentosEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
