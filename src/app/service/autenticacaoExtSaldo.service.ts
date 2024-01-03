import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';  // Importe o operador 'of' do RxJS
import { TokenService } from './token.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoExtratoSaldoService {

  private apiUrl: string = environment.API;
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  buscarExtratoSaldo(dataInicio: string, dataFim: string): Observable<any> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    });

    const params = {
      dataInicio: dataInicio,
      dataFim: dataFim,
    };

    return this.http.get(`${this.apiUrl}/extratoindividual/download`, { headers, params, responseType: 'blob' })
      .pipe(
        catchError((error) => {
          console.error('Erro na requisição Angular', error);
          return of(null);
        })
      );
  }
}
