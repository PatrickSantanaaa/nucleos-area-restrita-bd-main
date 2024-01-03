import { Injectable } from '@angular/core';
import { DadosGerais } from '../core/interface/DadosGerais';

  const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  salvaToken(token: string){
    console.log(token)
    localStorage.setItem(KEY, token)
  }

  jsonParaString(dadosGerais: DadosGerais){
    localStorage.setItem("dadosGerais", JSON.stringify(dadosGerais))
  }

  recuperaDadosGerais() {
    let dadosGerais = localStorage.getItem("dadosGerais");
    if(dadosGerais) {
      return JSON.parse(dadosGerais);
    }
  }

  excluiToken(){
    localStorage.removeItem(KEY)
  }

  retornaToken(){
    return localStorage.getItem(KEY) ?? "";
  }

  possuiToken(){
    return !!this.retornaToken()
  }
}
