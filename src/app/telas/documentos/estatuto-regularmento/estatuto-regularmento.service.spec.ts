/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstatutoRegularmentoService } from './estatuto-regularmento.service';

describe('Service: EstatutoRegularmento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstatutoRegularmentoService]
    });
  });

  it('should ...', inject([EstatutoRegularmentoService], (service: EstatutoRegularmentoService) => {
    expect(service).toBeTruthy();
  }));
});
