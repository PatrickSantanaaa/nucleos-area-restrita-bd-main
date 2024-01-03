import { TestBed } from '@angular/core/testing';

import { InformeRendimentosService } from './informe-rendimentos.service';

describe('InformeRendimentosService', () => {
  let service: InformeRendimentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeRendimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
