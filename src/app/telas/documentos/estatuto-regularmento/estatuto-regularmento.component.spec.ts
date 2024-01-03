import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatutoRegularmentoComponent } from './estatuto-regularmento.component';

describe('EstatutoRegularmentoComponent', () => {
  let component: EstatutoRegularmentoComponent;
  let fixture: ComponentFixture<EstatutoRegularmentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstatutoRegularmentoComponent]
    });
    fixture = TestBed.createComponent(EstatutoRegularmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
