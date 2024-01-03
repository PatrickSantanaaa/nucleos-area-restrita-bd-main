import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { InformeRendimentosService } from './informe-rendimentos.service';
import { TokenService } from 'src/app/service/token.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informe-rendimentos',
  templateUrl: './informe-rendimentos.component.html',
  styleUrls: ['./informe-rendimentos.component.scss']
})
export class InformeRendimentosComponent implements OnInit {

  listaAno: any = ''
  popUpMensagem = false
  formulario!: FormGroup

  constructor(private service: InformeRendimentosService, private builder: FormBuilder){}

  ngOnInit() {

    this.service.recuperaDados().subscribe(( response: any) =>{
      this.listaAno = response
      console.log(this.listaAno)
      if(this.listaAno.length === 0){
        this.popUpMensagem = true
      }
    })

    this.formulario = this.builder.group({
      id: [null],
      exercicio: [''],
    })
  }
  enviaFormulario() {
    const anoReferencia = this.formulario.get('exercicio')?.value
    this.service.gerarRelatorio(anoReferencia).subscribe(
      (data: any) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'informeRendimento.pdf';
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      },
    )
  }


  messages: Message[] = [{ severity: 'info', summary: 'Informe', detail: 'Não foram encontrados informes de rendimento gerados para o usuário logado.' }]


}
