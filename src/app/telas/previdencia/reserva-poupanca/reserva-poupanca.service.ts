import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ReservaPoupancaService {


constructor(private tokenService: TokenService,private http: HttpClient) { }

recuperaMesAno() {

  const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${dadosGerais.token}`
  })
  return this.http.get<any[]>(this.rota,{headers})
}

rota = environment.API + "/reservapoupanca"

}
