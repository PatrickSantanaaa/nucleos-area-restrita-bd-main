// comunicacao.service.ts
import { Injectable } from '@angular/core';
import { Subject, catchError } from 'rxjs';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DadosGerais } from '../core/interface/DadosGerais';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComunicacaoService {
  private nomeUsuarioSubject = new Subject<string>();
  apiUrl = environment.API;
  nomeUsuarioAtualizado$ = this.nomeUsuarioSubject.asObservable();

  constructor(private tokenService: TokenService, private http: HttpClient) {}

  atualizarNomeUsuario(nome: string) {
    this.nomeUsuarioSubject.next(nome);
  }

  recuperaReservaPoupanca() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get<any>(`${this.apiUrl}/usuario/reservapoupanca`, {headers})
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }
}
