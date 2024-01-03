import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContribuicaoService {


  constructor(private http: HttpClient,private tokenService: TokenService) {}

  recuperaMesAno() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })

    return this.http.get(this.rota,{headers})
  }

  recuperaDadosIniciais(mesInicio: string, mesFinal: string) {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    const params = {
      flagJoia: dadosGerais.flagJoia,
      dataMesInicial: mesInicio,
      dataMesFinal: mesFinal,
    };
    return this.http.get(this.rotaDadosInicias,{headers, params})
  }

  recuperaTotalizadores() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get(this.rotaDownload+'/totalizadores',{headers})
  }

  rota = environment.API + "/movimentacaoconta/datainiciofim"
  rotaDadosInicias = environment.API + "/movimentacaoconta/dadosiniciais"
  rotaDownload = environment.API + "/movimentacaoconta"

  gerarRelatorio(dataMesReferenciaInicio: string, dataMesReferenciaFim: string){
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })

    const params = {
      flagJoia: dadosGerais.flagJoia,
      dataMesInicial: dataMesReferenciaInicio,
      dataMesFinal: dataMesReferenciaFim,
    };
    return this.http.get(`${this.rotaDownload}/download`, {headers, params, responseType: 'blob'})

  }
  gerarMesInicial(){
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })

    return this.http.get(`${this.rotaDownload}/datainiciofim`, {headers, responseType: 'blob'})

  }
}
