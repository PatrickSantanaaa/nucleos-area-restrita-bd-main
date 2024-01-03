import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { TokenService } from 'src/app/service/token.service';
import { environment } from 'src/environments/environment.dev';

export interface ListaMenu {
  descricaoUrlMenu: String;
  dataLogin: Date;
  tipoItemMenu: number;
  descricaoMenu: String;
  descricaoItemMenu: String;
  descricaoSubItemMenu: String;
  descricaoIconeMenu: String;
}

export interface MegaMenu {
  tipoItemMenu: number;
  descricaoMenu: String;
  submenu: SubMegaMenu[];
}

export interface SubMegaMenu {
  descricaoItemMenu: String;
  descricaoSubItemMenu: String;
  descricaoIconeMenu: String;
  descricaoUrlMenu: String;
}

@Injectable({
  providedIn: 'root'
})
export class MegaMenuService {
  private API = environment.API

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  recuperaMenu() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })

    return this.http.get<ListaMenu[]>(`${this.API}/menu/lista`, {headers})
    .pipe(
      catchError(error => {
        console.error('Erro ao buscar cadastro:', error);
        console.error('Detalhes do erro:', error.message);
        throw error;
      })
    );
  }
}
