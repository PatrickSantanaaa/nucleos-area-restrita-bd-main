/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReservaPoupancaService } from './reserva-poupanca.service';

describe('Service: ReservaPoupanca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservaPoupancaService]
    });
  });

  it('should ...', inject([ReservaPoupancaService], (service: ReservaPoupancaService) => {
    expect(service).toBeTruthy();
  }));
});
