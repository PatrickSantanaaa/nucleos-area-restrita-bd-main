import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaContrachequeService {

constructor(private http: HttpClient,private tokenService: TokenService) { }

  recuperaMesAno() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get(this.rota,{headers})
  }

  rota = environment.API + "/pagamentos/contracheque"

  rotaDownload = environment.API + "/contracheque"

  gerarRelatorio(idPagamento: string){
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    
    const params = {
      identificadorPagamento: idPagamento,
    };

    return this.http.get(`${this.rotaDownload}/download`, {headers, params, responseType: 'blob'})
    
  }
}
