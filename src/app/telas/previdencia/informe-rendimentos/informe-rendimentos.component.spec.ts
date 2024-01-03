import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeRendimentosComponent } from './informe-rendimentos.component';

describe('InformeRendimentosComponent', () => {
  let component: InformeRendimentosComponent;
  let fixture: ComponentFixture<InformeRendimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeRendimentosComponent]
    });
    fixture = TestBed.createComponent(InformeRendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
