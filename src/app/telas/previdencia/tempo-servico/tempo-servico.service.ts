import { Injectable } from '@angular/core';
import { TempoServico, TempoTotalServico } from './tempo-servico.component';
import { TokenService } from 'src/app/service/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TempoServicoService {

  constructor(private tokenService: TokenService, private http: HttpClient){}

  gravaAceite() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.post(this.rotaAceite,null,{headers})
  }


  recuperaMesAno() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get<TempoServico[]>(this.rota,{headers})
  }

  recuperaTotal() {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${dadosGerais.token}`
    })
    return this.http.get<TempoTotalServico>(this.rotaTotal,{headers})
  }

  rota = environment.API + "/temposervico"
  rotaTotal = environment.API + "/temposervico/totalizadores"
  rotaAceite = environment.API + "/temposervico/aceite"
  



















  // lista = [
  //   {
  //     id: '1',
  //     documento: '1 - CTPS',
  //     empresa: 'SENDAS S/A',
  //     dataAdmissao: '19/01/1996',
  //     dataDemissao: '15/03/1996',
  //     ano: 0,
  //     mes: 3,
  //     dia: 15
  //   },
  //   {
  //     id: '2',
  //     documento: '1 - CTPS',
  //     empresa: 'ACSER SERVIÇOS TEMPORÁRIOS E TERCE',
  //     dataAdmissao: '24/04/2002',
  //     dataDemissao: '16/06/2002',
  //     ano: 1,
  //     mes: 1,
  //     dia: 12
  //   },
  //   {
  //     id: '3',
  //     documento: '1 - CTPS',
  //     empresa: 'NOVASOC COMERCIAL LTDA',
  //     dataAdmissao: '17/06/2002	',
  //     dataDemissao: '09/09/2002	',
  //     ano: 0,
  //     mes: 4,
  //     dia: 15
  //   },
  //   {
  //     id: '4',
  //     documento: '1 - CTPS',
  //     empresa: 'MOBILITA COMÉRCIO E INDÚSTRIA E REP',
  //     dataAdmissao: '17/06/2002	',
  //     dataDemissao: '09/09/2002	',
  //     ano: 0,
  //     mes: 4,
  //     dia: 15
  //   },
  //   {
  //     id: '5',
  //     documento: '1 - CTPS',
  //     empresa: 'SERES SERV. DE RECRUT. E SEL.DE PES',
  //     dataAdmissao: '16/11/2005	',
  //     dataDemissao: '13/02/2006	',
  //     ano: 0,
  //     mes: 4,
  //     dia: 15
  //   },
  //   {
  //     id: '5',
  //     documento: '1 - CTPS',
  //     empresa: 'CONTACT SERES SOLUÇÕES EM ATENDIMENT',
  //     dataAdmissao: '14/02/2006	',
  //     dataDemissao: '30/08/2006	',
  //     ano: 0,
  //     mes: 4,
  //     dia: 15
  //   },
  //   {
  //     id: '6',
  //     documento: '1 - CTPS',
  //     empresa: 'TELE FUTURA CENTRAIS DE ATENDIMENT',
  //     dataAdmissao: '19/10/2006	',
  //     dataDemissao: '02/05/2007	',
  //     ano: 0,
  //     mes: 4,
  //     dia: 15
  //   },
  //   {
  //     id: '7',
  //     documento: '1 - CTPS',
  //     empresa: 'TIVIT ATENDIMENTOS TELEFONICOS S/A',
  //     dataAdmissao: '19/10/2006	',
  //     dataDemissao: '03/12/2007	',
  //     ano: 0,
  //     mes: 4,
  //     dia: 15
  //   },
  //   {
  //     id: '8',
  //     documento: '1 - CTPS',
  //     empresa: 'SERES SERV. DE RECRUT. E SEL.DE PES',
  //     dataAdmissao: '26/11/2007	',
  //     dataDemissao: '16/06/2009	',
  //     ano: 0,
  //     mes: 4,
  //     dia: 15
  //   },
  // ];

  // tempoTotal = [
  //   {
  //     id: '1',
  //     descricao: 'Tempo Total de Serviço',
  //     ano: 19,
  //     mes: 4,
  //     dia: 12
  //   },
  //   {
  //     id: '2',
  //     descricao: 'Tempo Total de Patrocinador',
  //     ano: 14,
  //     mes: 5,
  //     dia: 12
  //   },
  // ]
  // constructor() { }

  // async recupera() {
  //   return this.lista;
  // }
  // async recuperaTempoTotal() {
  //   return this.tempoTotal;
  // }

}
