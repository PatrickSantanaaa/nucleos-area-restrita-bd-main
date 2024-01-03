/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GerenciamentoPlanoService } from './gerenciamento-plano.service';

describe('Service: GerenciamentoPlano', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenciamentoPlanoService]
    });
  });

  it('should ...', inject([GerenciamentoPlanoService], (service: GerenciamentoPlanoService) => {
    expect(service).toBeTruthy();
  }));
});
