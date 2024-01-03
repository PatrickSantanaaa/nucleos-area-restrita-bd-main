import { TestBed } from '@angular/core/testing';

import { PropostaEstatutoService } from './proposta-estatuto.service';

describe('PropostaEstatutoService', () => {
  let service: PropostaEstatutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropostaEstatutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
