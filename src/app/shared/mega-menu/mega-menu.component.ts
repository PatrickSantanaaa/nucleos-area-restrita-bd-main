import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicacaoService } from 'src/app/service/comunicacao.service';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';
import { ListaMenu, MegaMenu, MegaMenuService, SubMegaMenu } from './mega-menu.service';

@Component({
  selector: 'mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {
  nomeUsu!: any;
  descricaoUsuarioVisivel = false;
  saldoAtual!: number;

  listaMenu: MegaMenu[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private comunicacaoService: ComunicacaoService,
    private menuService: MegaMenuService,
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

    this.menuService.recuperaMenu().subscribe((response: ListaMenu[]) => {

      response.forEach((obj) => {
        const menuExiste = this.listaMenu.find((menu) => menu.tipoItemMenu === obj.tipoItemMenu);

        if (menuExiste) {
          const subMegaMenuObject: SubMegaMenu = {
            descricaoItemMenu: obj.descricaoItemMenu,
            descricaoSubItemMenu: obj.descricaoSubItemMenu,
            descricaoIconeMenu: obj.descricaoIconeMenu,
            descricaoUrlMenu: obj.descricaoUrlMenu,
          };

          menuExiste.submenu.push(subMegaMenuObject);
        } else {
          const megaMenuObject: MegaMenu = {
            tipoItemMenu: obj.tipoItemMenu,
            descricaoMenu: obj.descricaoMenu,
            submenu: [
              {
                descricaoItemMenu: obj.descricaoItemMenu,
                descricaoSubItemMenu: obj.descricaoSubItemMenu,
                descricaoIconeMenu: obj.descricaoIconeMenu,
                descricaoUrlMenu: obj.descricaoUrlMenu,
              },
            ],
          };

          this.listaMenu.push(megaMenuObject);
          console.warn(this.listaMenu)
        }
      })
    })

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

  limparHover(menuItemId: number) {
    const menuItem = document.getElementById('menu-item-'+menuItemId);

    // Remove a classe de hover
    menuItem?.classList.remove('ativo'); // Substitua 'hover-class' pela classe de hover que você deseja remover
  }

  addHoverClass(element:any) {
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

  montaUrl(menu: String, submenu: String) {
    // Remover acentos
    let textoSemAcentos = menu.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Substituir espaços múltiplos por um único hífen
    let textoComHifen = textoSemAcentos.replace(/\s+/g, '');

    // Permitir apenas letras minúsculas, '-' e '_'
    let textoLimpo = textoComHifen.toLowerCase().replace(/[^a-z-_]/g, '');

    return `${textoLimpo}/${submenu}`;
  }
}
