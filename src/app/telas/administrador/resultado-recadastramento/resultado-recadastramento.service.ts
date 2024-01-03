import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';
import { TempoServico } from './resultado-recadastramento.component';

@Injectable({
  providedIn: 'root'
})
export class ResultadoRecadastramentoService {

  constructor(private tokenService: TokenService, private http: HttpClient){}

  recuperaLista(dataInicio: string, dataFim: string) {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    const params = {
      dataInicio: dataInicio,
      dataFim: dataFim
    };

    return this.http.get<TempoServico>(this.rota,{headers, params})

  }

  rota = environment.API + "/recadastramento/resultado"

}
