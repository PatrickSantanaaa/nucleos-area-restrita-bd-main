import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresServicosComponent } from './prestadores-servicos.component';

describe('PrestadoresServicosComponent', () => {
  let component: PrestadoresServicosComponent;
  let fixture: ComponentFixture<PrestadoresServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestadoresServicosComponent]
    });
    fixture = TestBed.createComponent(PrestadoresServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
