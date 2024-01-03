import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaSaldoDevedorService {

  dadosGerais!: any;

  constructor(private http: HttpClient,public tokenService: TokenService) { 
    this.dadosGerais = this.tokenService.recuperaDadosGerais()
    console.log(this.dadosGerais)
  }
  
  recuperaLista() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    const params = {
      identificadorTipoEmprestimo: dadosGerais.identificadorTipoEmprestimo,
      identificadorRequerimentoEmprestimo: dadosGerais.identificadorRequerimentoEmprestimo,
      tipoIndexado: dadosGerais.tipoIndexado,
      tipoEncargo: dadosGerais.tipoEncargo
    };

    return this.http.get(this.rotaLista,{headers, params})

  }

  rotaLista = environment.API + "/saldodevedor/recuperalista"

  recuperaSaldo() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    const params = {
      identificadorTipoEmprestimo: dadosGerais.identificadorTipoEmprestimo,
      identificadorRequerimentoEmprestimo: dadosGerais.identificadorRequerimentoEmprestimo,
      tipoIndexado: dadosGerais.tipoIndexado,
      tipoEncargo: dadosGerais.tipoEncargo
    };

    return this.http.get(this.rotaSaldo,{headers, params})

  }

  rotaSaldo = environment.API + "/saldodevedor/recuperasaldo"

}
