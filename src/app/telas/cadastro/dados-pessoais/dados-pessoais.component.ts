import { TokenService } from './../../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CadastroService } from 'src/app/service/cadastro.service';
import { CombosService } from 'src/app/service/combos.service';
import { GridItemsDel } from 'sysprev-recursos';

@Component({
  selector: 'dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {
  titulo!: string;
  formulario!: UntypedFormGroup;
  panelOpenState = false;
  token = '';
  cadastro!: any;
  flagPoliticamente: any[] = []
  flagIdentificador: any[] = []
  estadoCivil: any[] = []
  situacaonaturalizacao: any[] = []
  siglaUf: any[] = []
  instrucaoparticipante: any[] = []
  parentesco: any[] = []

  //Grid Inline
  gridColunasFormatas = ['Nome', 'Parentesco', 'Sexo', 'Nascimento', 'CPF'];
  gridColunas = ['nome Dependente', 'codigo Parentesco', 'tipo Sexo Dependente', 'data Nascimento', 'numero CPF Dependente'];
  gridTitulo = "dependentes";
  gridTipoInput = ['text','select','text','date','text'];
  gridSelects = [[],[
    {value: '01', label: 'CONJUGE'},
    {value: '02', label: 'EX-CONJUGE'},
    {value: '03', label: 'COMPANHEIRO(A)'},
    {value: '04', label: 'EX-COMPANHEIRO(A)'},
    {value: '05', label: 'PAI OU MAE'},
    {value: '06', label: 'DESIGNADO'},
    {value: '07', label: 'FILHO(A)'},
    {value: '08', label: 'ENTEADO(A)'},
    {value: '09', label: 'IRMAO OU IRMA'},
    {value: '10', label: 'MENOR SOB GUARDA'},
    {value: '11', label: 'SOGRO(A)'},
    {value: '12', label: 'NETO(A)'},
  ],[],[],[],[]];

  constructor(
    private comboService: CombosService,
    private builder: UntypedFormBuilder,
    private tokenService: TokenService,
    private cadastroService: CadastroService){
    this.formulario = this.builder.group({
      nomeUsuario: [''],
      dataNascimento: [''],
      sexo: [''],
      codigoEstadoCivil: [''],
      descricaoEmail: [''],
      descricaoCargo: [''],
      flagPoliticamenteExposta: [''],
      dataUltimaAtualizacaoCadastral: [''],
      anoChegada: [''],
      anoNaturalizacao: [''],
      identificadorSituacaoNaturalizacao: [''],
      descricaoNacionalidade: [''],
      descricaoNaturalidade: [''],
      siglaUf: [''],
      numeroIdentidadeParticipante: [''],
      nomeOrgaoExpedidorIdentidade: [''],
      numeroCpfUsuario: [''],
      nomePai: [''],
      nomeMae: [''],
      numeroCpfResponsavelLegal: [''],
      nomeResponsavelLegal: [''],
      dataEmissaoIdentidadeParticipante: [''],
      codigoInstrucaoParticipante: [''],
      dataNascimentoResponsavelLegal: [''],
      sexoResponsavelLegal: [''],
      descricaoEmailResponsavelLegal: [''],
      numeroTelefoneResponsavelLegal: [''],
      dependentes: ['']
    })
  }

  ngOnInit(): void {
    this.token = this.tokenService.retornaToken();
    // this.cadastroService.buscarCadastro(this.token).subscribe(cadastro => {
    //   this.cadastro = cadastro;
    //   this.flagPoliticamente = [cadastro.flagPoliticamenteExposta];
    //   this.flagIdentificador = [cadastro.flagIdentificador];
    //   this.estadoCivil = [cadastro.codigoEstadoCivil];
    //   this.gridData = cadastro.dependentes;
    //   this.carregarForm();
    //   console.error(this.cadastro)
    // })

    // this.comboService.estadoCivil(this.token).subscribe(cadastro => {
    //   this.estadoCivil = cadastro;
    // })

    // this.comboService.situacaonaturalizacao(this.token).subscribe(cadastro => {
    //   this.situacaonaturalizacao = cadastro;
    // })

    // this.comboService.uf(this.token).subscribe(cadastro => {
    //   this.siglaUf = cadastro;
    // })

    // this.comboService.instrucaoparticipante(this.token).subscribe(cadastro => {
    //   this.instrucaoparticipante = cadastro;
    // })

    // this.comboService.parentesco(this.token).subscribe(cadastro => {
    //   this.parentesco = cadastro;
    // })
  }

  carregarForm(){
    this.formulario?.patchValue({
      nomeUsuario: this.cadastro.nomeUsuario,
      dataNascimento: this.cadastro.dataNascimento,
      sexo: this.cadastro.sexo,
      codigoEstadoCivil: this.cadastro.codigoEstadoCivil,
      descricaoEmail: this.cadastro.descricaoEmail,
      descricaoCargo: this.cadastro.descricaoCargo,
      flagPoliticamenteExposta: this.cadastro.flagPoliticamenteExposta,
      dataUltimaAtualizacaoCadastral: this.cadastro.dataUltimaAtualizacaoCadastral,
      identificadorSituacaoNaturalizacao: this.cadastro.identificadorSituacaoNaturalizacao,
      anoChegada: this.cadastro.anoChegada,
      anoNaturalizacao: this.cadastro.anoNaturalizacao,
      descricaoNacionalidade: this.cadastro.descricaoNacionalidade,
      descricaoNaturalidade: this.cadastro.descricaoNaturalidade,
      siglaUf: this.cadastro.siglaUf,
      numeroIdentidadeParticipante: this.cadastro.numeroIdentidadeParticipante,
      numeroCpfUsuario: this.cadastro.numeroCpfUsuario,
      nomePai: this.cadastro.nomePai,
      nomeMae: this.cadastro.nomeMae,
      nomeOrgaoExpedidorIdentidade: this.cadastro.nomeOrgaoExpedidorIdentidade,
      numeroCpfResponsavelLegal: this.cadastro.numeroCpfResponsavelLegal,
      nomeResponsavelLegal: this.cadastro.nomeResponsavelLegal,
      dataEmissaoIdentidadeParticipante: this.cadastro.dataEmissaoIdentidadeParticipante,
      codigoInstrucaoParticipante: this.cadastro.codigoInstrucaoParticipante,
      dataNascimentoResponsavelLegal: this.cadastro.dataNascimentoResponsavelLegal,
      sexoResponsavelLegal: this.cadastro.sexoResponsavelLegal,
      descricaoEmailResponsavelLegal: this.cadastro.descricaoEmailResponsavelLegal,
      numeroTelefoneResponsavelLegal: this.cadastro.numeroTelefoneResponsavelLegal,
    })
  }

  atualizarCadastro(){
    const dadosAtualizados = {
      nomeUsuario: this.formulario?.value.nomeUsuario,
      dataNascimento: this.formulario?.value.dataNascimento,
      sexo: this.formulario?.value.sexo,
      codigoEstadoCivil: this.formulario?.value.codigoEstadoCivil,
      descricaoEmail: this.formulario?.value.descricaoEmail,
      descricaoCargo: this.formulario?.value.descricaoCargo,
      flagPoliticamenteExposta: this.formulario?.value.flagPoliticamenteExposta,
      dataUltimaAtualizacaoCadastral: this.formulario?.value.dataUltimaAtualizacaoCadastral,
      identificadorSituacaoNaturalizacao: this.formulario?.value.identificadorSituacaoNaturalizacao,
      anoChegada: this.formulario?.value.anoChegada,
      anoNaturalizacao: this.formulario?.value.anoNaturalizacao,
      descricaoNacionalidade: this.formulario?.value.descricaoNacionalidade,
      descricaoNaturalidade: this.formulario?.value.descricaoNaturalidade,
      siglaUf: this.formulario?.value.siglaUf,
      numeroIdentidadeParticipante: this.formulario?.value.numeroIdentidadeParticipante,
      numeroCpfUsuario: this.formulario?.value.numeroCpfUsuario,
      nomePai: this.formulario?.value.nomePai,
      nomeMae: this.formulario?.value.nomeMae,
      nomeOrgaoExpedidorIdentidade: this.formulario?.value.nomeOrgaoExpedidorIdentidade,
      numeroCpfResponsavelLegal: this.formulario?.value.numeroCpfResponsavelLegal,
      nomeResponsavelLegal: this.formulario?.value.nomeResponsavelLegal,
      dataEmissaoIdentidadeParticipante: this.formulario?.value.dataEmissaoIdentidadeParticipante,
      codigoInstrucaoParticipante: this.formulario?.value.codigoInstrucaoParticipante,
      dataNascimentoResponsavelLegal: this.formulario?.value.dataNascimentoResponsavelLegal,
      sexoResponsavelLegal: this.formulario?.value.sexoResponsavelLegal,
      descricaoEmailResponsavelLegal: this.formulario?.value.descricaoEmailResponsavelLegal,
      numeroTelefoneResponsavelLegal: this.formulario?.value.numeroTelefoneResponsavelLegal
    }

    this.cadastroService.editarCadastro(dadosAtualizados, this.token).subscribe({
      next: () => {
        alert('atualizado com sucesso')
      },
      error: (err) => {
        console.log('Erro ao atualizar cadastro', err)
      }
    })
  }

  gridData: any[] = [];
  gridItemsDel: GridItemsDel[] = [
    {grid: 'dependentes', itemsDel: []}
  ];

  onFormulario(event: any) {
    this.formulario.controls[event.grid].patchValue(event.items)
  }

  onDeletaLinhas(event: any) {
    this.gridItemsDel.map(obj => {
      if(obj.grid === event.grid) {
        obj.itemsDel = event.itemsDel;
      }
    })
  }
}
