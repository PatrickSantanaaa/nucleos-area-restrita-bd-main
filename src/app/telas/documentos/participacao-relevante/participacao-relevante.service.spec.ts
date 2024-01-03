import { TestBed } from '@angular/core/testing';

import { ParticipacaoRelevanteService } from './participacao-relevante.service';

describe('ParticipacaoRelevanteService', () => {
  let service: ParticipacaoRelevanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipacaoRelevanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
