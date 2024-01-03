/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultaContrachequeService } from './consulta-contracheque.service';

describe('Service: ConsultaContracheque', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaContrachequeService]
    });
  });

  it('should ...', inject([ConsultaContrachequeService], (service: ConsultaContrachequeService) => {
    expect(service).toBeTruthy();
  }));
});
