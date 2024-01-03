import { Component } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { TempoServicoService } from './tempo-servico.service';
import { HttpClient } from '@angular/common/http';

export interface TempoServico {

}

export interface TempoTotalServico {
  tempoServicoTotalAno: number;
  tempoServicoTotalMes: number;
  tempoServicoTotalDia: number;
}

@Component({
  selector: 'app-tempo-servico',
  templateUrl: './tempo-servico.component.html',
  styleUrls: ['./tempo-servico.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class TempoServicoComponent {
  listaGrid: TempoServico[] = [];
  tempoTotal: TempoTotalServico [] = [];
  visible: boolean = false;
  checked: boolean = false;
  popUpMensagem = false

  constructor(private service: TempoServicoService,private http: HttpClient) {}

  ngOnInit() {

    this.service.recuperaMesAno().subscribe( (response : TempoServico[]) =>{
      this.listaGrid = response
      console.log(response)
      if(this.listaGrid.length === 0){
        this.popUpMensagem = true
      }
    })

    this.service.recuperaTotal().subscribe( (response : TempoTotalServico) =>{
      this.tempoTotal.push(response)
      console.log(response)
    })

    console.log(this.listaGrid.length)
    console.log(this.tempoTotal.length)

      this.showDialog()
  }

  showDialog() {
    this.visible = true;

  }

  fecharModal() {
  this.visible = false;
  this.checked = true

  this.service.gravaAceite().subscribe( (response :  any) => {
      console.log(response)
    })
  }

  messages: Message[] = [{ severity: 'info', summary: 'Informe', detail: 'Não foram encontrados informes de rendimento gerados para o usuário logado.' }]

}
