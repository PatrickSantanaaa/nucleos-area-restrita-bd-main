import { Component } from '@angular/core';
import { InformeIrService } from './informe-ir.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-informe-ir',
  templateUrl: './informe-ir.component.html',
  styleUrls: ['./informe-ir.component.scss']
})
export class InformeIrComponent {

  listaMesAno: any = ''
  popUpMensagem: boolean = false
  formulario!: FormGroup;

  constructor(private service: InformeIrService, private builder: FormBuilder) {}

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
    const anoReferencia = this.formulario.get('ano')?.value
    this.service.gerarRelatorio(anoReferencia).subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'informeIr.pdf';
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      },
    )
  }
  messages: Message[] = [{ severity: 'info', summary: 'Informe', detail: 'Não foram encontrados informes de rendimento gerados para o usuário logado.' }]

}
