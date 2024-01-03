import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrachequeComponent } from './contracheque.component';

describe('ContrachequeComponent', () => {
  let component: ContrachequeComponent;
  let fixture: ComponentFixture<ContrachequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrachequeComponent]
    });
    fixture = TestBed.createComponent(ContrachequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
