import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../service/autenticacao.service';
import { AutenticacaoEsqSenhaService } from '../service/autenticacaoEsqSenha.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MenuService } from '../menu/menu.service';
import { MegaMenuService } from '../shared/mega-menu/mega-menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ MessageService ]
})
export class LoginComponent {
  formulario!: UntypedFormGroup;
  formularioEsqueceuSenha!: UntypedFormGroup;
  respostaRequisicao: string = '';

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private tokenService: TokenService,
    private builder: UntypedFormBuilder,
    private authService: AutenticacaoService,
    private authServiceEsqSenha: AutenticacaoEsqSenhaService,
    private menuService: MegaMenuService,
    private router: Router){
    this.formulario = this.builder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })

    this.formularioEsqueceuSenha = this.builder.group({
      numeroCPF: ['', Validators.required],
      dataNascimento: ['', Validators.required]
    })
  }

  loading: boolean = false;
  loadingEsqSenha: boolean = false;

  login() {
    this.loading = true;
    if (this.formulario.valid) {
      const login = this.formulario.value.login;
      const senha = this.formulario.value.senha;

      this.authService.autenticar(login, senha).subscribe({
        next: (value: any) => {

          // console.error(value) verifica retorno da API

          this.loading = false

          localStorage.setItem('senhaTemporaria', value.senhaTemporaria)
          localStorage.setItem('login', value.login)
          localStorage.setItem('nome', value.nome)
          localStorage.setItem('cpfOriginal', value.login)
          localStorage.setItem('tipoUsuario', value.roles);

          this.tokenService.jsonParaString(value)

          const senhaTemporaria = localStorage.getItem('senhaTemporaria');

          if (senhaTemporaria === 'true') {
            this.router.navigateByUrl('/menu/alterar-senha');
          } else

          if (senhaTemporaria !== 'true') {
            this.router.navigateByUrl('/menu/cadastro/dados-pessoais');
          }

          this.menuService.recuperaMenu().subscribe(response => {
            console.log(response);
          })
        },
        error: (err: any) => {
          console.log('Problema na autenticação', err);
          this.loading = false

          if (err instanceof HttpErrorResponse) {
            console.log('Status do erro:', err.status);
            console.log('Mensagem do erro:', err.error.message);
          }
          this.badRequest();
        },
      });
    } else {
      this.showMessage();
    }
  }

  esqueceuSenha() {
  this.loadingEsqSenha = true;
  if (this.formularioEsqueceuSenha.valid) {
  const numeroCPF = this.formularioEsqueceuSenha.value.numeroCPF;
  const dataNascimento = this.formularioEsqueceuSenha.value.dataNascimento;

  this.authServiceEsqSenha.autenticar(numeroCPF, dataNascimento).subscribe({
    next: (response) => {
      this.loadingEsqSenha = false;

      if (response.body && response.body.message) {

          this.respostaRequisicao = response.body.message;
        } else {
          this.respostaRequisicao = 'Mensagem não encontrada na resposta';
        }
        },
        error: (err) => {
          this.loadingEsqSenha = false;
          this.badRequestEsqSenha();
          console.log('erro no login', err);
        }
    });
    } else {
      this.showMessageEsqSenha();
    }
  }

  //hidden e show login, esqueceu senha
  isLoginFormVisible: boolean = true;
  isFirstAccessVisible: boolean = false;
  isForgotPasswordVisible: boolean = false;

  toggleForm(formType: string) {
    if (formType === 'login') {
      this.isLoginFormVisible = true;
      this.isForgotPasswordVisible = false;
      this.respostaRequisicao = ""
    } else if (formType === 'forgotPassword') {
      this.isLoginFormVisible = false;
      this.isForgotPasswordVisible = true;
    }
  }

  showMessageEsqSenha() {
    this.formularioEsqueceuSenha.markAllAsTouched();
    this.formularioEsqueceuSenha.updateValueAndValidity();
    this.messageService.add({ severity: 'error', summary: 'Obrigatoriedade', detail: 'Os campos obrigatórios devem ser preenchidos' });
    this.loadingEsqSenha = false
  }

  badRequestEsqSenha() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'CPF ou Data de Nascimento Inválido' });
    this.loadingEsqSenha = false
  }


  showMessage() {
    this.formulario.markAllAsTouched();
    this.formulario.updateValueAndValidity();
    this.messageService.add({ severity: 'error', summary: 'Obrigatoriedade', detail: 'CPF e Senha são obrigatórios e devem ser preenchidos' });
    this.loading = false
  }

  badRequest() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'Credenciais incorretas' });
    this.loading = false
  }

}
