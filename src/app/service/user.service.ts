import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';

export interface PessoaUsuaria {
  nome: string;
  nascimento: string;
  login: string;
  telefone: string;
  email: string;
  senha: string;
  flagPoliticamenteExposta: string[];
  codigoEstadoCivil: string[];
  flagIdentificador: string[];
  siglaUf: string[];
  parentesco: string[];
  dependentes: Dependentes[]
}

export interface Dependentes {
  nomeDependente: string,
  dataNascimento: string,
  codigoParentesco: string,
  tipoSexoDependente: string,
  numeroCPFDependente: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  menuHidden!: boolean

  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor(
    private tokenService: TokenService) {
  }

  salvarToken(token: string) {
    this.tokenService.salvaToken(token);
  }

  logout() {
    this.tokenService.excluiToken();
    this.userSubject.next(null);
  }

  estaLogado(): boolean {
    const isLogado = this.tokenService.possuiToken();

    return isLogado;
  }

  retornaUser() {
    return localStorage.getItem('nome')
  }

  retornaLogin() {
    return localStorage.getItem('login')
  }
}
