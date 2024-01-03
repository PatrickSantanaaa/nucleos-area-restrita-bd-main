import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiradaPatrocinioComponent } from './retirada-patrocinio.component';

describe('RetiradaPatrocinioComponent', () => {
  let component: RetiradaPatrocinioComponent;
  let fixture: ComponentFixture<RetiradaPatrocinioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetiradaPatrocinioComponent]
    });
    fixture = TestBed.createComponent(RetiradaPatrocinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
