import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocarParticipanteComponent } from './trocar-participante.component';

describe('TrocarParticipanteComponent', () => {
  let component: TrocarParticipanteComponent;
  let fixture: ComponentFixture<TrocarParticipanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrocarParticipanteComponent]
    });
    fixture = TestBed.createComponent(TrocarParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
