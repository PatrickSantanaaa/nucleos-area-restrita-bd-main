import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimulacaoEmprestimoService {

  private apiUrl: string = environment.API;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  validaParticipante(): Observable<any> {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get<any>(`${this.apiUrl}/simulacao/validaparticipante`, {headers})
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }

  recuperaSalario(): Observable<any> {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get<any>(`${this.apiUrl}/simulacao/salarioparticipante`, {headers})
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }

  aceitarSimulacao(tipoOpcao: any): Observable<any> {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.post<any>(`${this.apiUrl}/simulacao`, tipoOpcao, {headers})
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }

  async recuperaValoresSimulacao(form: any) {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    console.log(form)
    return this.http.post<any>(`${this.apiUrl}/simulacao/valoressimulacao`, form, {headers})
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }

  rotaDownload = environment.API + "/simulacao"

  gerarRelatorio(){
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get(`${this.rotaDownload}/download`, {headers, responseType: 'blob'})
    
  }

  imprimirSimulacao(form: any): Observable<any> {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    console.log(form)
    return this.http.post<any>(`${this.apiUrl}/simulacao/imprimesimulacao`, form, {headers})
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }
}
