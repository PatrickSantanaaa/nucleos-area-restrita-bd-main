/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TempoServicoService } from './tempo-servico.service';

describe('Service: TempoServico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempoServicoService]
    });
  });

  it('should ...', inject([TempoServicoService], (service: TempoServicoService) => {
    expect(service).toBeTruthy();
  }));
});
