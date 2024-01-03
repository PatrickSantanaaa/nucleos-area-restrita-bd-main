import { TestBed } from '@angular/core/testing';

import { InformeIrService } from './informe-ir.service';

describe('InformeIrService', () => {
  let service: InformeIrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeIrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
