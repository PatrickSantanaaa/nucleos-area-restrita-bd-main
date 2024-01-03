import { Component } from '@angular/core';
import { ResultadoRecadastramentoService } from './resultado-recadastramento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface TempoServico {
  patrocinadora: string;
  ativo: string;
  aposentado: string;
  pensionista: string;
  ativo2: string;
  aposentado2: string;
  pensionista2: string;

}

export interface TempoTotalServico {
  patrocinadora: string;
  ativo: string;
}

@Component({
  selector: 'app-resultado-recadastramento',
  templateUrl: './resultado-recadastramento.component.html',
  styleUrls: ['./resultado-recadastramento.component.scss']
})
export class ResultadoRecadastramentoComponent {

  mostraGrid: boolean = false
  products!: TempoServico[];
  visible: boolean = false;
  formulario!: FormGroup
  checked: boolean = false;
  listaLista: any = []
  resultadoTotal: any = []

  apareceGrid(event : any) {
    this.mostraGrid = true

    const dataInicio = this.formulario.get('inicial')?.value
    const dataFim = this.formulario.get('final')?.value

    this.service.recuperaLista(dataInicio, dataFim).subscribe( response =>{
      this.listaLista = response
      console.log(this.listaLista)
    })
  }

  constructor(private service: ResultadoRecadastramentoService, private builder: FormBuilder) {

    this.formulario = this.builder.group({
      inicial: ['', [Validators.required]],
      final: ['', [Validators.required]]
    });

  }


    ngOnInit() {}
}
