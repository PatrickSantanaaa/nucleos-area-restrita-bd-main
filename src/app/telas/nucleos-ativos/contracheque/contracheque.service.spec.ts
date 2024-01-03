import { TestBed } from '@angular/core/testing';

import { ContrachequeService } from './contracheque.service';

describe('ContrachequeService', () => {
  let service: ContrachequeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContrachequeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
