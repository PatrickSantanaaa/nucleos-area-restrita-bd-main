import { Component } from '@angular/core';
import { Message, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '../adesao-patrocinadora/nodeservice';
import { GerenciamentoPlanoService } from './gerenciamento-plano.service';

@Component({
  selector: 'app-gerenciamento-plano',
  templateUrl: './gerenciamento-plano.component.html',
  styleUrls: ['./gerenciamento-plano.component.scss'],
  providers: [MessageService]
})
export class GerenciamentoPlanoComponent {
  messages: Message[] = [
    {
      severity: 'info',
      summary: 'Informe',
      detail: "Não há documentos para serem visualizados."
    }
  ]

  listaDocumentos: any = ''

  constructor(private service: GerenciamentoPlanoService){}

  ngOnInit() {

    this.service.recuperaMesAno().subscribe(( response  : any) =>{
      this.listaDocumentos = response
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

}
