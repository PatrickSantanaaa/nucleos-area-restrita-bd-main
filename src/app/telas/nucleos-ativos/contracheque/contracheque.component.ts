import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from 'primeng/api';
import { ContrachequeService } from './contracheque.service';

@Component({
  selector: 'app-contracheque',
  templateUrl: './contracheque.component.html',
  styleUrls: ['./contracheque.component.scss']
})
export class ContrachequeComponent {

  constructor(public service: ContrachequeService, private builder: FormBuilder){}

  listaMesAno: any = ''
  popUpMensagem: boolean = false
  formulario!: FormGroup;

  ngOnInit() {
  
    this.service.recuperaMesAno().subscribe(( response  : any) =>{
      this.listaMesAno = response
      response.map((obj : any, index: number) =>{
        obj.key = index;
        obj.icon = 'pi pi-fw pi-inbox';
        const dataFormatada = obj.nome.replace(/^(\d{4})(\d{2})$/, '$2/$1');
        obj.label = dataFormatada
        delete obj.nome;
        obj.children = obj.subdiretorio.map((subObj : any, subIndex: number) => {
          subObj.key = `${index}-${subIndex}`;
          subObj.label = subObj.nome
          subObj.data = subObj.linkDownload
          subObj.type = 'url'
          delete subObj.linkDownload;
          delete subObj.nome
          return subObj
        })
        delete obj.subdiretorio
        // console.log(obj)
        // this.files.push(obj)
      })
      this.files = response
    })
  }

  enviaParaLink(link : string, nome : string) {
    this.service.recuperaDados(link).subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = nome;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      },
    )
  }

  files!: any[]

  messages: Message[] = [
    {
      severity: 'info',
      summary: 'Informe',
      detail: "Não há contracheques para serem visualizados"
    }
  ]
}
