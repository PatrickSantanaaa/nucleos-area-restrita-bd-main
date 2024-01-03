import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciamentoPlanoService {

  constructor(private tokenService: TokenService, private http: HttpClient) { }

  recuperaDados(link : string) {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get(`${environment.API}/${link}`,{headers, responseType: 'blob'})
  }
  
    recuperaMesAno() {
      const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${dadosGerais.token}`
      })
  
    
      const params = {
        nomePasta: 'transferencia',
      };
  
      return this.http.get(this.rota,{headers, params})
    }
    
    rota = environment.API + "/documentos/lista"
    rotaDownload = environment.API + "/documentos/lista"

}
