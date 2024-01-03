import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeIrComponent } from './informe-ir.component';

describe('InformeIrComponent', () => {
  let component: InformeIrComponent;
  let fixture: ComponentFixture<InformeIrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeIrComponent]
    });
    fixture = TestBed.createComponent(InformeIrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
