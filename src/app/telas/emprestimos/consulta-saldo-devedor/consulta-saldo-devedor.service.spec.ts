import { TestBed } from '@angular/core/testing';

import { ConsultaSaldoDevedorService } from './consulta-saldo-devedor.service';

describe('ConsultaSaldoDevedorService', () => {
  let service: ConsultaSaldoDevedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaSaldoDevedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
