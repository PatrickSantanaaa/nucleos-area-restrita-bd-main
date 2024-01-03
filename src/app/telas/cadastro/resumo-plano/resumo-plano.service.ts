import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumoPlanoService {
  products!: any[];
  products2!: any[];
  products3!: any[];
  products4!: any[];

  constructor() { }

  get() {
    return Promise.resolve(this.grid1().slice(0, 5));
  }

  get2() {
    return Promise.resolve(this.grid2().slice(0, 5));
  }

  get3() {
    return Promise.resolve(this.grid3().slice(0, 5));
  }

  get4() {
    return Promise.resolve(this.grid4().slice(0, 5));
  }

  grid1() {
    return [
        {
            id: '1000',
            patrocinadora: 'Mestra 1',
            matricula: '00001',
            vigencia: '01/11/2023',
            situacao: 'ativo',
            tributacao: 65,
            tempo: 24
        },
        {
            id: '1001',
            patrocinadora: 'Mestra 1',
            matricula: '00002',
            vigencia: '01/11/2023',
            situacao: 'ativo',
            tributacao: 72,
            tempo: 24
        },
        {
            id: '1002',
            patrocinadora: 'Mestra 1',
            matricula: '00003',
            vigencia: '01/11/2023',
            situacao: 'ativo',
            tributacao: 79,
            tempo: 24
        }
    ]
  }

  grid2() {
    return [
        {
            id: '1000',
            perfil: 'Mestra 1',
            vigencia: '01/11/2023',
            percentual: 65,
        },
        {
            id: '1001',
            perfil: 'Mestra 1',
            vigencia: '01/11/2023',
            percentual: 72,
        },
        {
            id: '1002',
            perfil: 'Mestra 1',
            vigencia: '01/11/2023',
            percentual: 79,
        }
    ]
  }

  grid3() {
    return [
        {
            id: '1000',
            conta: '1000',
            vigencia: '01/11/2023',
            percentual: 65,
            contribuicao: 65,
            fator: 65,
        },
        {
            id: '1001',
            conta: '10001',
            vigencia: '01/11/2023',
            percentual: 72,
            contribuicao: 72,
            fator: 72,
        },
        {
            id: '1002',
            conta: '10002',
            vigencia: '01/11/2023',
            percentual: 79,
            contribuicao: 79,
            fator: 79,
        }
    ]
  }

  grid4() {
    return [
        {
            id: '1000',
            faixa: 'Faixa 1',
            vigencia: '01/11/2023',
            percentual: 65,
        },
        {
            id: '1001',
            faixa: 'Faixa 2',
            vigencia: '01/11/2023',
            percentual: 72,
        },
        {
            id: '1002',
            faixa: 'Faixa 3',
            vigencia: '01/11/2023',
            percentual: 79,
        }
    ]
  }
}
