import { ConsultaContrachequeService } from './consulta-contracheque.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-consulta-contracheque',
  templateUrl: './consulta-contracheque.component.html',
  styleUrls: ['./consulta-contracheque.component.scss']
})
export class ConsultaContrachequeComponent implements OnInit {

  messages: Message[] = [{ severity: 'info', summary: 'Informe', detail: 'Não foram encontrados pagamentos nos últimos 12 últimos meses a partir do mês corrente para o usuário logado.' }]
  listaMesAno: any = ''
  popUpMensagem: boolean = false
  formulario!: FormGroup;
  
  constructor(private service: ConsultaContrachequeService, private builder: FormBuilder) {}

  ngOnInit() {

    this.service.recuperaMesAno().subscribe( response =>{
      this.listaMesAno = response

      if(this.listaMesAno.length === 0){
        this.popUpMensagem = true
      }
    })

    this.formulario = this.builder.group({
      id: [null],
      ano: [''],
    })
  }

  enviaFormulario() {
    const idPagamento = this.formulario.get('ano')?.value
    this.service.gerarRelatorio(idPagamento).subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'consultaContracheque.pdf';
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      },
    )
  }
}

