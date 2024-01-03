import { TestBed } from '@angular/core/testing';

import { RecadastramentoService } from './recadastramento.service';

describe('RecadastramentoService', () => {
  let service: RecadastramentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecadastramentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
