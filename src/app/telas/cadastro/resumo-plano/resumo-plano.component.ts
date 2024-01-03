import { Component, OnInit } from '@angular/core';
import { ResumoPlanoService } from './resumo-plano.service';

@Component({
  selector: 'app-resumo-plano',
  templateUrl: './resumo-plano.component.html',
  styleUrls: ['./resumo-plano.component.scss']
})
export class ResumoPlanoComponent implements OnInit {
  readyonly = true
  panelOpenState = false;
  alterarPlano: boolean = false

  constructor(
    public service: ResumoPlanoService
  ) { }

  ngOnInit() {
    this.service.get().then((data) => {
        // this.service.products = data;
    });

    this.service.get2().then((data) => {
      // this.service.products2 = data;
    });

    this.service.get3().then((data) => {
      // this.service.products3 = data;
    });

    this.service.get4().then((data) => {
      // this.service.products4 = data;
    });
  }

  planoTrue(){
    this.alterarPlano = true
  }

  planoFalse(){
    this.alterarPlano = false
  }
}
