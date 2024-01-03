/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrocaParticipanteService } from './troca-participante.service';

describe('Service: TrocaParticipante', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrocaParticipanteService]
    });
  });

  it('should ...', inject([TrocaParticipanteService], (service: TrocaParticipanteService) => {
    expect(service).toBeTruthy();
  }));
});
