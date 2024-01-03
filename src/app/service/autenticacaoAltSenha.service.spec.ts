/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutenticacaoAltSenhaService } from './autenticacaoAltSenha.service';

describe('Service: AutenticacaoAltSenha', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoAltSenhaService]
    });
  });

  it('should ...', inject([AutenticacaoAltSenhaService], (service: AutenticacaoAltSenhaService) => {
    expect(service).toBeTruthy();
  }));
});
