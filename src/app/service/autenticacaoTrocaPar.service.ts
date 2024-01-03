import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';  // Importe o operador 'of' do RxJS
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { catchError, tap } from 'rxjs/operators';
import { DadosGerais } from '../core/interface/DadosGerais';

interface TokenInfo {
  token: string;
  login: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoTrocaParService {

  private apiUrl: string = environment.API;
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  trocarParticipante(login: any): Observable<any> {
    let tokenReal: string;

    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    const tokenAdministrador = localStorage.getItem('tokenAdministrador');
    const token = this.tokenService.retornaToken();
  
    if (tokenAdministrador !== null && tokenAdministrador !== "") {
      tokenReal = tokenAdministrador;
      console.warn(tokenReal)
    } else {
      tokenReal = token || ''; // Usar token se não for nulo, senão, usar string vazia
    }
    const body = {
      login: login
    };

    return this.http.post<any>(this.apiUrl + '/trocamatricula', login, { headers })
      .pipe(
        catchError(error => {
          // Trate o erro aqui
          throw error;
        }),
        // Atualiza o token no serviço TokenService se a resposta for bem-sucedida
        tap(resposta => {
          console.warn(resposta);
          this.atualizaTokenNovo(resposta);
        })
      );
  }


  trocarParticipanteVoltar(login: any): Observable<any> {
    const tokenAdministrador = localStorage.getItem('tokenAdministrador');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenAdministrador,
    });

    const body = {
      login: login
    };

    return this.http.post<any>(this.apiUrl + '/trocamatricula', login, { headers })
      .pipe(
        catchError(error => {
          // Trate o erro aqui
          console.warn(error)
          throw error;
        }),
        // Atualiza o token no serviço TokenService se a resposta for bem-sucedida
        tap(resposta => {
          console.warn(resposta)
          this.atualizaTokenNovoAdm(resposta);
        })
      );
  }

  atualizaTokenNovo(tokenNovo: TokenInfo) {
    localStorage.setItem('token', tokenNovo.token)
    localStorage.setItem('login', tokenNovo.login)
    localStorage.setItem('nome', tokenNovo.nome)
  }

  atualizaTokenNovoAdm(tokenNovo: TokenInfo) {
    const tokenAdministrador = localStorage.getItem('tokenAdministrador');
    if (tokenAdministrador) {
      localStorage.setItem('tokenAdministrador', tokenAdministrador);
      localStorage.setItem('token', tokenNovo.token);
      localStorage.setItem('login', tokenNovo.login);
      localStorage.setItem('nome', tokenNovo.nome);
    } else {
      console.error('Token de administrador não encontrado no localStorage.');
    }
  }

}