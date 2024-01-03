import { TestBed } from '@angular/core/testing';

import { ResumoPlanoService } from './resumo-plano.service';

describe('ResumoPlanoService', () => {
  let service: ResumoPlanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumoPlanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
