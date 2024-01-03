import { TestBed } from '@angular/core/testing';

import { PrestadoresServicosService } from './prestadores-servicos.service';

describe('PrestadoresServicosService', () => {
  let service: PrestadoresServicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestadoresServicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
