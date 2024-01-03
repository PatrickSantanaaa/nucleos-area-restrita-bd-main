import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AutenticacaoTrocaParService } from 'src/app/service/autenticacaoTrocaPar.service';
import { UserService } from 'src/app/service/user.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ComunicacaoService } from 'src/app/service/comunicacao.service';



@Component({
  selector: 'app-trocar-participante',
  templateUrl: './trocar-participante.component.html',
  styleUrls: ['./trocar-participante.component.scss']
})
export class TrocarParticipanteComponent implements OnInit {
  formulario!: UntypedFormGroup;
  loginUser!: any;
  inscricaoOriginal!: any;
  loading: boolean = false;
  loadingVoltar: boolean = false;
  disableVoltar: boolean = true;

  constructor(
    private router: Router,
    private builder: UntypedFormBuilder,
    private authServiceTrocaPar: AutenticacaoTrocaParService,
    private userService: UserService,
    private tokenService: TokenService,
    private messageService: MessageService,
    private comunicacaoService: ComunicacaoService
  ) {
    this.formulario = this.builder.group({
      numeroInscricao: ['', Validators.required],
      sequencialBeneficiario: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.inscricaoOriginal  = localStorage.getItem('inscricaoOriginal')
  }

  //habilitar ou não o botão de voltar Login
  podeVoltarLogin(): boolean {
    const inscricaoOriginal = localStorage.getItem('inscricaoOriginal');
    const login = localStorage.getItem('login');

    // Verifica se inscricaoOriginal é diferente de login
    return inscricaoOriginal !== login;
  }

   trocarParticipante() {
    this.loading = true;
    const form = this.formulario.value;

    console.log(form)

    this.authServiceTrocaPar.trocarParticipante(form)
      .subscribe(
        resposta => {
          this.loading = false;
          console.log('Resposta trocarParticipante:', resposta);
          this.processarTrocaParticipante(resposta.nome);

          this.tokenService.jsonParaString(resposta)
          
        }
      );
  }

  voltarLogin() {
    this.loadingVoltar = true;
    console.warn(this.inscricaoOriginal);
    this.authServiceTrocaPar.trocarParticipanteVoltar(this.inscricaoOriginal)
      .subscribe(
        resposta => {
          this.loadingVoltar = false;
          console.log('Resposta voltarLogin:', resposta);
          this.processarTrocaParticipante(resposta.nome);
        }
      );
  }

  private processarTrocaParticipante(novoNome: string) {
    this.comunicacaoService.atualizarNomeUsuario(novoNome);

    this.showMessageOk();
    setTimeout(() => {
      this.userService.menuHidden = false;
      this.router.navigate(['/menu/cadastro/dados-pessoais']);
    }, 1000);
  }

  showMessageOk() {
    this.messageService.add({ severity: 'success', summary: '', detail: 'Participante alterado com sucesso' });
  }

  showMessageerro() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'Inscrição inválida ou inexistente' });
  }
}

