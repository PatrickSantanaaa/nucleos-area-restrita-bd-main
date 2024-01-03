import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

interface AuthResponse {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private API = environment.API

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  autenticar(login: string, senha: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.API}/auth/login`,
      { login, senha }
    )
    .pipe(
      tap((response) => {
        this.userService.salvarToken(response.token);
      })
    );
  }

}
