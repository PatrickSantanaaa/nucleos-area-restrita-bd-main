import { TestBed } from '@angular/core/testing';

import { AjuntamentoCondutaService } from './ajuntamento-conduta.service';

describe('AjuntamentoCondutaService', () => {
  let service: AjuntamentoCondutaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjuntamentoCondutaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
