import { Component } from '@angular/core';
import { ContribuicaoService } from './contribuicao.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface ConsultaSaldo {

}


@Component({
  selector: 'app-contribuicao',
  templateUrl: './contribuicao.component.html',
  styleUrls: ['./contribuicao.component.scss']
})
export class ContribuicaoComponent {



  constructor(private service: ContribuicaoService, private builder: FormBuilder) {}

  mesInicio!: string;
  mesFinal!: string;
  mesInicialFinal: any = ''
  dadosIniciais: any = []
  totalizadores: any = ''
  zebrado = false;
  products!: ConsultaSaldo[];
  formulario!: FormGroup;

  ngOnInit() {
    this.service.recuperaMesAno().subscribe((response: any) =>{
      this.mesInicialFinal = response
      this.mesInicio = response.dataMesReferenciaInicio
      this.mesFinal = response.dataMesReferenciaFim
    })
    this.service.recuperaDadosIniciais(this.mesInicio, this.mesFinal).subscribe( response =>{
      this.dadosIniciais.push(response)
      console.log(response)
    })
    this.service.recuperaTotalizadores().subscribe( response =>{
      this.totalizadores = response
      console.log(response)
    })

    this.formulario = this.builder.group({
      id: [null],
      total: [''],
    })
  }
  alternarZebramento() {
    this.zebrado = !this.zebrado;
  }

  enviaFormulario() {
    const total = this.formulario.get('total')?.value
    this.service.gerarRelatorio(this.mesInicio, this.mesFinal).subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'contribuicao.pdf';
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      },
    )
  }
}
