import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutenticacaoAltSenhaService } from 'src/app/service/autenticacaoAltSenha.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss'],
  providers: [ MessageService ]
})
export class AlterarSenhaComponent implements OnInit {
  respostaRequisicao: string = '';
  respostaRequisicaoError: string = '';
  loginUser!: any;

  constructor(
    private router: Router,
    private builder: UntypedFormBuilder,
    private authServiceAltSenha: AutenticacaoAltSenhaService,
    private userService: UserService,
    private messageService: MessageService){
    this.formulario = this.builder.group({
      senhaAtual: ['', Validators.required],
      novaSenha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loginUser = this.userService.retornaLogin()
  }

  formulario!: UntypedFormGroup;
  hide = true;
  hide2 = true;
  hide3 = true;

  loading: boolean = false;

  showMessage() {
    this.formulario.markAllAsTouched();
    this.formulario.updateValueAndValidity();
    this.messageService.add({ severity: 'error', summary: 'Obrigatoriedade', detail: 'Os campos são obrigatórios e devem ser preenchidos' });
    this.loading = false
  }

  showMessageerro() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'As senhas são diferentes' });
    this.loading = false
  }

  showMessageOk() {
    this.messageService.add({ severity: 'success', summary: '', detail: 'Senha Alterada com Sucesso' });
    this.loading = false
  }

  alterarSenha() {
    if (this.formulario.valid) {
      this.loading = true;
      const login = this.loginUser
      const senhaAtual = this.formulario.value.senhaAtual;
      const novaSenha = this.formulario.value.novaSenha;
      const confirmacaoSenha = this.formulario.value.confirmacaoSenha;

      this.authServiceAltSenha.autenticar(login, senhaAtual, novaSenha, confirmacaoSenha).subscribe({
        next: (response) => {
          console.warn(response.status)
          this.loading = false
          if (response.status === 200) {
          this.respostaRequisicao = "Senha Alterada com Sucesso"
          this.showMessageOk()
          setTimeout(() => {
              this.userService.menuHidden = false
              this.router.navigate(['/menu/cadastro/dados-pessoais']);
            }, 1000)
          }
        },
        error: (err: { status: number; }) => {
          console.warn(err)
          this.loading = false
          if (err.status === 403) {
            this.showMessageerro()
          }
        }
      });
    } else {
      this.showMessage();
    }
  }
}
