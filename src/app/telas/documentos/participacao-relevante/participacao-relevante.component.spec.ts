import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoRelevanteComponent } from './participacao-relevante.component';

describe('ParticipacaoRelevanteComponent', () => {
  let component: ParticipacaoRelevanteComponent;
  let fixture: ComponentFixture<ParticipacaoRelevanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipacaoRelevanteComponent]
    });
    fixture = TestBed.createComponent(ParticipacaoRelevanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
