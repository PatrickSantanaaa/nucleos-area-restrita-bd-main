import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PessoaUsuaria } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl: string = environment.API;

  constructor(
    private http: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/dadoscadastrais`, pessoaUsuaria);
  }

  buscarCadastro(token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/dadoscadastrais`, { headers })
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }

  editarCadastro(pessoaUsuaria: any, token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.put<PessoaUsuaria>(`${this.apiUrl}/dadoscadastrais`, pessoaUsuaria, { headers });
  }

}
