import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformeRendimentosService {

constructor(private http: HttpClient,private tokenService: TokenService) {}

  recuperaDados(){
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get(`${this.rota}/recuperamesesinforme` , {headers})
  }

  rota = environment.API + "/impostorenda"

  rotaDownload = environment.API + "/impostorenda"

  gerarRelatorio(anoReferencia: string){
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    
    const params = {
      anoReferencia: anoReferencia
    };
    return this.http.get(`${this.rotaDownload}/download`, {headers, params, responseType: 'blob'})
    
  }
}
