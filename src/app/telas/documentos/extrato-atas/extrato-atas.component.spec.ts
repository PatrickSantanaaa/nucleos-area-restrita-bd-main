import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoAtasComponent } from './extrato-atas.component';

describe('ExtratoAtasComponent', () => {
  let component: ExtratoAtasComponent;
  let fixture: ComponentFixture<ExtratoAtasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtratoAtasComponent]
    });
    fixture = TestBed.createComponent(ExtratoAtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
