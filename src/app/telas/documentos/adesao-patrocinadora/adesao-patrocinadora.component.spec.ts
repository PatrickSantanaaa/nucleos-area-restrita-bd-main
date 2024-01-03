import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdesaoPatrocinadoraComponent } from './adesao-patrocinadora.component';

describe('AdesaoPatrocinadoraComponent', () => {
  let component: AdesaoPatrocinadoraComponent;
  let fixture: ComponentFixture<AdesaoPatrocinadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdesaoPatrocinadoraComponent]
    });
    fixture = TestBed.createComponent(AdesaoPatrocinadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
