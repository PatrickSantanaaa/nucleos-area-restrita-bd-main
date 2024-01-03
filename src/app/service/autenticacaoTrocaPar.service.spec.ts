import { TestBed } from '@angular/core/testing';

import { AutenticacaoTrocaParService } from './autenticacaoTrocaPar.service';

describe('AutenticacaoTrocaParService', () => {
  let service: AutenticacaoTrocaParService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoTrocaParService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
