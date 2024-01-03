import { TestBed } from '@angular/core/testing';

import { AutenticacaoExtratoSaldoService } from './autenticacaoExtSaldo.service';

describe('AutenticacaoExtratoSaldoService', () => {
  let service: AutenticacaoExtratoSaldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoExtratoSaldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
