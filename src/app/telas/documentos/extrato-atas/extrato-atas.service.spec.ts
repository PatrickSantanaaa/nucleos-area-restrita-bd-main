import { TestBed } from '@angular/core/testing';

import { ExtratoAtasService } from './extrato-atas.service';

describe('ExtratoAtasService', () => {
  let service: ExtratoAtasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtratoAtasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
