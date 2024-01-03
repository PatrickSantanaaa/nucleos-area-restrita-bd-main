import { Component, OnInit } from '@angular/core';
import { ConsultaSaldoDevedorService } from './consulta-saldo-devedor.service';
import { TokenService } from 'src/app/service/token.service';

export interface ConsultaSaldo {

}

@Component({
  selector: 'app-consulta-saldo-devedor',
  templateUrl: './consulta-saldo-devedor.component.html',
  styleUrls: ['./consulta-saldo-devedor.component.scss']
})


export class ConsultaSaldoDevedorComponent implements OnInit {

  constructor(public service: ConsultaSaldoDevedorService, public tokenService: TokenService) {}

  listaLista: any = ''
  listaSaldo: any = ''
  zebrado = false;
  products!: ConsultaSaldo[];

  ngOnInit() {
    this.service.recuperaLista().subscribe( response =>{
      this.listaLista = response
      console.log(response)
    })

    this.service.recuperaSaldo().subscribe( response =>{
      this.listaSaldo = response
      console.log(response)
    })
  }

  alternarZebramento() {
    this.zebrado = !this.zebrado;
  }

}
