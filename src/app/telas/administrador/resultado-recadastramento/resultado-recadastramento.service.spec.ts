import { TestBed } from '@angular/core/testing';

import { ResultadoRecadastramentoService } from './resultado-recadastramento.service';

describe('ResultadoRecadastramentoService', () => {
  let service: ResultadoRecadastramentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoRecadastramentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
