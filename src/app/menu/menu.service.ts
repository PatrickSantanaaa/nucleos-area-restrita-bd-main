import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { DadosGerais } from '../core/interface/DadosGerais';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private API = environment.API

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  recuperaMenu(): Observable<Response> {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get<any>(`${this.API}/menu/lista`, {headers})
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }
}
