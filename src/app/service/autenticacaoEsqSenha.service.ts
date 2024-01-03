import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

interface AuthResponse {
  message: string;
  access_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoEsqSenhaService {
  private API = environment.API

  constructor(
    private http: HttpClient
  ) { }

  autenticar(numeroCPF: string, dataNascimento: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post(`${this.API}/esquecisenha`, { numeroCPF, dataNascimento }, { observe: 'response' })
      .pipe(
        map(response => {
        if (response.body && typeof response.body === 'object') {
          // Verificando se response.body é um objeto válido.
          const authResponse: AuthResponse = response.body as AuthResponse;

          // Você pode criar um HttpResponse personalizado, se necessário.
          const httpResponse = new HttpResponse<AuthResponse>({
            body: authResponse,
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
          });

          return httpResponse;
        } else {
          throw new Error('Resposta inválida');
        }
      })
    );
  }
}
