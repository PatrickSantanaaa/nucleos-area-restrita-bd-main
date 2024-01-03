/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulacaoEmprestimoService } from './simulacao-emprestimo.service';

describe('Service: SimulacaoEmprestimo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulacaoEmprestimoService]
    });
  });

  it('should ...', inject([SimulacaoEmprestimoService], (service: SimulacaoEmprestimoService) => {
    expect(service).toBeTruthy();
  }));
});
