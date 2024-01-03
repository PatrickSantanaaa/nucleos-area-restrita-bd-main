import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicacaoService } from 'src/app/service/comunicacao.service';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nomeUsu!: any;
  descricaoUsuarioVisivel = false;
  saldoAtual!: number;
  constructor(
    private userService: UserService,
    private router: Router,
    private comunicacaoService: ComunicacaoService,
    private tokenService: TokenService
  ){}

  logout(){
    this.userService.logout()
    this.router.navigate(['/login']);
    localStorage.removeItem('login');
    localStorage.removeItem('nome');
    localStorage.removeItem('cpfOriginal');
    localStorage.removeItem('senhaTemporaria');
    localStorage.removeItem('tipoUsuario');
  }

  ngOnInit() {
    this.nomeUsu = this.userService.retornaUser();
    console.warn("ngOnInit do header "+this.nomeUsu);

    // Inscrever-se para receber atualizações do nome do usuário
    this.comunicacaoService.nomeUsuarioAtualizado$.subscribe(
      novoNome => {
        this.nomeUsu = novoNome;
      }
    );

    // this.comunicacaoService.recuperaReservaPoupanca().subscribe(
    //   response => {
    //     console.log(response)
    //     this.saldoAtual = response.valorSaldoReserva;
    //   }
    // );

      let dadosGerais = this.tokenService.recuperaDadosGerais()

      this.saldoAtual = dadosGerais.valorSaldoReserva
  }

  mostrarSaldo: boolean = false;

  toggleMostrarSaldo() {
    this.mostrarSaldo = !this.mostrarSaldo;
  }

  mostraDescricaoUsuario() {
    this.descricaoUsuarioVisivel = true;
  }

  escondeDescricaoUsuario() {
    this.descricaoUsuarioVisivel = false;
  }

  limparHover(menuItemId: string) {
    const menuItem = document.getElementById(menuItemId);

    // Remove a classe de hover
    menuItem?.classList.remove('ativo'); // Substitua 'hover-class' pela classe de hover que você deseja remover
  }

  addHoverClass(element:any) {
    console.log(element.target.classList.contains('inside-menu-1'))
    if(element.target.classList.contains('inside-menu-1')) {
      document.getElementById('menu-item-1')?.classList.add('ativo')
    }

    if(element.target.classList.contains('inside-menu-2')) {
      document.getElementById('menu-item-2')?.classList.add('ativo')
    }
    if(element.target.classList.contains('inside-menu-3')) {
      document.getElementById('menu-item-3')?.classList.add('ativo')
    }
    if(element.target.classList.contains('inside-menu-4')) {
      document.getElementById('menu-item-4')?.classList.add('ativo')
    }
    if(element.target.classList.contains('inside-menu-5')) {
      document.getElementById('menu-item-5')?.classList.add('ativo')
    }
    // element.classList.add('hovered');
  }

  removeHoverClass(element:any) {
    console.log(element.target.classList.contains('inside-menu-1'))
    if(element.target.classList.contains('inside-menu-1')) {
      document.getElementById('menu-item-1')?.classList.remove('ativo')
    }

    if(element.target.classList.contains('inside-menu-2')) {
      document.getElementById('menu-item-2')?.classList.remove('ativo')
    }

    if(element.target.classList.contains('inside-menu-3')) {
      document.getElementById('menu-item-3')?.classList.remove('ativo')
    }

    if(element.target.classList.contains('inside-menu-4')) {
      document.getElementById('menu-item-4')?.classList.remove('ativo')
    }
    if(element.target.classList.contains('inside-menu-5')) {
      document.getElementById('menu-item-5')?.classList.remove('ativo')
    }
    // element.classList.remove('hovered');
  }
}
