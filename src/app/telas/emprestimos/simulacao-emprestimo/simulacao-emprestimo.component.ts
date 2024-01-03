import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Message, MessageService } from 'primeng/api';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import { SimulacaoEmprestimoService } from './simulacao-emprestimo.service';
import { TokenService } from 'src/app/service/token.service';
import { DadosGerais } from 'src/app/core/interface/DadosGerais';


@Component({
  selector: 'app-simulacao-emprestimo',
  templateUrl: './simulacao-emprestimo.component.html',
  styleUrls: ['./simulacao-emprestimo.component.scss'],
  providers: [MessageService]
})
export class SimulacaoEmprestimoComponent implements OnInit {
  @ViewChild('stepper') private myStepper!: MatStepper;

  formularioValoresSimulacao!: FormGroup;
  formularioImprimeSimulacao!: FormGroup;
  loading = false;
  firstFormGroup = this._formBuilder.group({
    valorSalarioBruto: ['', Validators.required],
    valorAdicionalTempoServico: [''],
    valorGratificacao: [''],
    valorSomatorioParcelasEmprestimos: [''],
    valorSomatorioPensoesAlimenticias: [''],
    aceite: ['', Validators.requiredTrue],
  });
  secondFormGroup = this._formBuilder.group({
    valorMaximoPerito: [''],
    valorSolicitado: [''],
    numeroParcelas: [''],
    valorSaldoDevedor: [''],
    valorIof: [''],
    valorTaxaAdministracao: [''],
    valorCredito: [''],
    dataCredito: [''],
    valorBaseCalculo: [''],
    valorCorrecaoMonetaria: [''],
    valorFundoQuitacaoMorte: [''],
    valorTaxaLiquidacao: [''],
    valorParcelaPrestacao: [''],
    flagIndice: ['', Validators.requiredTrue],
    valorEmprestimo: [''],
    prazo: [''],
    valorPrestacaoInicial: ['']
  });

  constructor(private _formBuilder: FormBuilder,
    private service: SimulacaoEmprestimoService,
    private messageService: MessageService,
    private tokenService: TokenService) {
    this.formularioValoresSimulacao = this._formBuilder.group({
      identificadorParticipante: ['', Validators.required],
      sequencialBeneficiario: ['', Validators.required],
      valorSolicitado: ['', Validators.required],
      quantidadePrazo: ['', Validators.required],
      valorSalarioBruto: ['', Validators.required],
      valorSalarioLiquidacao: ['', Validators.required],
      valorMargem: ['', Validators.required],
      dataCredito: ['', Validators.required],
      identificadorTipoEmprestimo: ['', Validators.required],
      identificadorRequerimentoEmprestimo: ['', Validators.required],
      valorSaldoDevedor: ['', Validators.required],
    });

    this.formularioImprimeSimulacao = this._formBuilder.group({
      identificadorParticipante: [''],
      sequencialBeneficiario: [''],
      valorMaximoPermitido: [''],
      numeroParcelas: [''],
      valorSaldoAtual: [''],
      valorIof: [''],
      valorTaxaAdministrativa: [''],
      valorCredito: [''],
      dataCredito: [''],
      valorParcela: [''],
      valorCorrecaoMonetaria: [''],
      valorFundoQuitacaoMorte: [''],
      valorTaxaLiquidacao: [''],
      valorParcelaCobranca: [''],
      valorSolicitado: [''],
      dataCadastramento: [''],
      flagIndice: [''],
      valorPagamentoFim: ['']
    })
  }

  show(mensagemAlerta: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "''" });
    window.alert(`${mensagemAlerta}`)
  }

  async ngOnInit() {
    this.service.validaParticipante().subscribe(response => {
    })

    this.service.recuperaSalario().subscribe(response => {
      // this.firstFormGroup.get("valorSalarioBruto")?.patchValue(response.salarioBruto)
    })
  }
  mensagemAlerta!: string;
  link = `http://nucleos1.locaweb.com.br/arquivos/documentos/Nuclin_67.pdf`;
  messages: Message[] = [{ severity: 'info', summary: 'Informe', detail: `` }]

  messages2: Message[] = [{ severity: 'info', summary: 'Informe', detail: "Os dados aqui informados consideram o valor máximo que pode ser emprestado. Caso queira alterar o valor solicitado e/ou número de parcelas clique no botão localizado ao lado destas informações." }]

  messages3: Message[] = [{ severity: 'info', summary: 'Informe', detail: "Antes de entregar o formulário ao Nucleos, reflita sobre a decisão de solicitar o empréstimo e tenha a certeza de que é a melhor opção neste momento. Em caso de dúvida entre em contato com o Setor de Atendimento para saná-las." }]
  messages4: Message[] = [{ severity: 'info', summary: 'Informe', detail: "Caso deseje solicitar o empréstimo os formulários que constam do link abaixo deverão ser preenchidos e encaminhados ao Nucleos, juntamente com a cópia dos seus três últimos contracheques. Após a análise de toda a documentação com resultado positivo o empréstimo será creditado na conta corrente indicada pelo participante, observando-se o cronograma de disponibilização de créditos estabelecido pelo Nucleos. Formulários para solicitação de empréstimo:" }]

  async enviaPrimeiroStep(stepper: MatStepper) {
    this.loading = true;
    const tipoOpcao = {tipoOpcao: "3"}
    this.service.aceitarSimulacao(tipoOpcao).subscribe(response => {
      // this.firstFormGroup.get("valorSalarioBruto")?.patchValue(response.salarioBruto)
      console.log(response)
    });

    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();

    await this.populaFormularioValoresSimulacao(dadosGerais);

    (await this.service.recuperaValoresSimulacao(this.formularioValoresSimulacao.value)).subscribe((response: any) => {
      // this.firstFormGroup.get("valorSalarioBruto")?.patchValue(response.salarioBruto)
      console.log(response)
      console.log(this.messages3[0].detail);
      this.secondFormGroup.patchValue(response);
      this.secondFormGroup.get("valorBaseCalculo")?.patchValue("0");
      this.secondFormGroup.get("valorFundoQuitacaoMorte")?.patchValue("0");
      this.secondFormGroup.get("valorTaxaLiquidacao")?.patchValue("0");
      this.secondFormGroup.get("valorSaldoDevedor")?.patchValue("0");
      this.secondFormGroup.get("numeroParcelas")?.patchValue("60");
      this.secondFormGroup.get("valorEmprestimo")?.patchValue(response.valorSolicitado);
      this.secondFormGroup.get("prazo")?.patchValue("60");
      this.secondFormGroup.get("valorPrestacaoInicial")?.patchValue("0");
      this.secondFormGroup.get("dataCredito")?.patchValue(dadosGerais.dataCredito);
      this.mensagemAlerta = response.descricaoCriticaIndice
      this.loading = false;

      if(Number(this.firstFormGroup.get('valorSalarioBruto')?.value) >= 1000000){
        this.show(response.mensagem)
      } else {
        this.myStepper.next()

      }
    });
  }

  async populaFormularioValoresSimulacao(dadosGerais: DadosGerais) {
    this.formularioValoresSimulacao.get("identificadorParticipante")?.patchValue(dadosGerais.identificadorParticipante);
    this.formularioValoresSimulacao.get("sequencialBeneficiario")?.patchValue(0);
    this.formularioValoresSimulacao.get("valorSolicitado")?.patchValue(0);
    this.formularioValoresSimulacao.get("quantidadePrazo")?.patchValue(0);
    this.formularioValoresSimulacao.get("valorSalarioBruto")?.patchValue(this.firstFormGroup.get('valorSalarioBruto')?.value);
    this.formularioValoresSimulacao.get("valorSalarioLiquidacao")?.patchValue(this.firstFormGroup.get('valorSalarioBruto')?.value);
    this.formularioValoresSimulacao.get("valorMargem")?.patchValue(0);
    this.formularioValoresSimulacao.get("dataCredito")?.patchValue(dadosGerais.dataCredito);
    this.formularioValoresSimulacao.get("identificadorTipoEmprestimo")?.patchValue(dadosGerais.identificadorTipoEmprestimo);
    this.formularioValoresSimulacao.get("identificadorRequerimentoEmprestimo")?.patchValue(dadosGerais.identificadorRequerimentoEmprestimo);
    this.formularioValoresSimulacao.get("valorSaldoDevedor")?.patchValue(dadosGerais.valorSaldoDevedor);
  }


  imprimeValoresSimulacao(stepper: MatStepper) {
    const dadosGerais: DadosGerais = this.tokenService.recuperaDadosGerais();

    this.populaFormularioImprimeSimulacao(dadosGerais);
    this.service.imprimirSimulacao(this.formularioImprimeSimulacao.value).subscribe(response => {
      console.log(response)
    })
  }

  populaFormularioImprimeSimulacao(dadosGerais: DadosGerais) {
    this.formularioImprimeSimulacao.patchValue(this.secondFormGroup.value)
    this.formularioImprimeSimulacao.get("dataCadastramento")?.patchValue(Date.now())
    this.formularioImprimeSimulacao.get("identificadorParticipante")?.patchValue(dadosGerais.identificadorParticipante)
    this.formularioImprimeSimulacao.get("sequencialBeneficiario")?.patchValue(0)
    this.formularioImprimeSimulacao.get("valorMaximoPermitido")?.patchValue(this.secondFormGroup.get("valorMaximoPerito")?.value)
    this.formularioImprimeSimulacao.get("valorParcela")?.patchValue(this.secondFormGroup.get("valorParcelaPrestacao")?.value)
    this.formularioImprimeSimulacao.get("valorParcelaCobranca")?.patchValue(this.secondFormGroup.get("valorParcelaPrestacao")?.value)
    this.formularioImprimeSimulacao.get("valorSaldoAtual")?.patchValue(0)
    // this.formularioImprimeSimulacao.get("valorPagamentoFim")?.patchValue(this.secondFormGroup.get("valorEmprestimo")?.value)
    this.formularioImprimeSimulacao.get("valorTaxaAdministrativa")?.patchValue(this.secondFormGroup.get("valorTaxaAdministracao")?.value)
  }

  enviaFormulario() {
    const prazoPdf = this.secondFormGroup.get('prazo')?.value
    this.service.gerarRelatorio().subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'simulacao-emprestimo.pdf';
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      },
    )
  }

}
