import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { authGuard } from '../core/guards/auth.guard';
import { AlterarSenhaComponent } from '../telas/alterar-senha/alterar-senha.component';
import { DadosPessoaisComponent } from '../telas/cadastro/dados-pessoais/dados-pessoais.component';
import { FatcaComponent } from '../telas/cadastro/fatca/fatca.component';
import { PoliticamenteExpostaComponent } from '../telas/cadastro/politicamente-exposta/politicamente-exposta.component';
import { ResumoPlanoComponent } from '../telas/cadastro/resumo-plano/resumo-plano.component';
import { DocumentosEntidadeComponent } from '../telas/documentos-entidade/documentos-entidade.component';
import { ExtratoSaldoComponent } from '../telas/arrecadacao/extrato-saldo/extrato-saldo.component';
import { SimuladoresDesligamentoComponent } from '../telas/simuladores/simuladores-desligamento/simuladores-desligamento.component';
import { TrocarParticipanteComponent } from '../telas/administrador/trocar-participante/trocar-participante.component';
import { CadastroDocumentosComponent } from '../telas/documentos/cadastro-documentos/cadastro-documentos.component';
import { TempoServicoComponent } from '../telas/previdencia/tempo-servico/tempo-servico.component';
import { ReservaPoupancaComponent } from '../telas/previdencia/reserva-poupanca/reserva-poupanca.component';
import { ConsultaContrachequeComponent } from '../telas/previdencia/consulta-contracheque/consulta-contracheque.component';
import { InformeRendimentosComponent } from '../telas/previdencia/informe-rendimentos/informe-rendimentos.component';
import { ConsultaSaldoDevedorComponent } from '../telas/emprestimos/consulta-saldo-devedor/consulta-saldo-devedor.component';
import { EstatutoRegularmentoComponent } from '../telas/documentos/estatuto-regularmento/estatuto-regularmento.component';
import { SimulacaoEmprestimoComponent } from '../telas/emprestimos/simulacao-emprestimo/simulacao-emprestimo.component';
import { PropostaEstatutoComponent } from '../telas/documentos/proposta-estatuto/proposta-estatuto.component';
import { AdesaoPatrocinadoraComponent } from '../telas/documentos/adesao-patrocinadora/adesao-patrocinadora.component';
import { RetiradaPatrocinioComponent } from '../telas/documentos/retirada-patrocinio/retirada-patrocinio.component';
import { GerenciamentoPlanoComponent } from '../telas/documentos/gerenciamento-plano/gerenciamento-plano.component';
import { ParticipacaoRelevanteComponent } from '../telas/documentos/participacao-relevante/participacao-relevante.component';
import { PrestadoresServicosComponent } from '../telas/documentos/prestadores-servicos/prestadores-servicos.component';
import { ExtratoAtasComponent } from '../telas/documentos/extrato-atas/extrato-atas.component';
import { AjuntamentoCondutaComponent } from '../telas/documentos/ajuntamento-conduta/ajuntamento-conduta.component';
import { InformeIrComponent } from '../telas/emprestimos/informe-ir/informe-ir.component';
import { RecadastramentoComponent } from '../telas/previdencia/recadastramento/recadastramento.component';
import { ContribuicaoComponent } from '../telas/previdencia/contribuicao/contribuicao.component';
import { BoletosComponent } from '../telas/emprestimos/boletos/boletos.component';
import { ContrachequeComponent } from '../telas/nucleos-ativos/contracheque/contracheque.component';
import { ResultadoRecadastramentoComponent } from '../telas/administrador/resultado-recadastramento/resultado-recadastramento.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastro/dados-pessoais',
    component: DadosPessoaisComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastro/politicamente-exposta',
    component: PoliticamenteExpostaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastro/fatca',
    component: FatcaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastro/resumo-plano',
    component: ResumoPlanoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'arrecadacao/extrato-saldo',
    component: ExtratoSaldoComponent,
    canActivate: [authGuard]
  },
  // {
  //   path: 'simuladores/simulador-desligamento',
  //   component: SimuladoresDesligamentoComponent,
    // canActivate: [authGuard]
  // },
  {
    path: 'documentos-entidade',
    component: DocumentosEntidadeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/cadastro-documentos',
    component: CadastroDocumentosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/adesao-patrocinadora',
    component: AdesaoPatrocinadoraComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/retirada-patrocinio',
    component: RetiradaPatrocinioComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/ajuntamento-conduta',
    component: AjuntamentoCondutaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/gerenciamento-plano',
    component: GerenciamentoPlanoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/participacao-relevante',
    component: ParticipacaoRelevanteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/extrato-atas',
    component: ExtratoAtasComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/prestadores-servicos',
    component: PrestadoresServicosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/proposta-estatuto',
    component: PropostaEstatutoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos/estatuto-regulamento',
    component: EstatutoRegularmentoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'previdencia/tempo-servico',
    component: TempoServicoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'previdencia/recadastramento',
    component: RecadastramentoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'previdencia/contribuicao',
    component: ContribuicaoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'previdencia/reserva-poupanca',
    component: ReservaPoupancaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'previdencia/consulta-contracheque',
    component: ConsultaContrachequeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'previdencia/informe-rendimentos',
    component: InformeRendimentosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'alterar-senha',
    component: AlterarSenhaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'administrador/trocar-participante',
    component: TrocarParticipanteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'emprestimo/consulta-saldo-devedor',
    component: ConsultaSaldoDevedorComponent,
    canActivate: [authGuard]
  },
  {
    path: 'emprestimo/boletos',
    component: BoletosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'emprestimo/simulacao-emprestimo',
    component: SimulacaoEmprestimoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'emprestimo/informe-ir',
    component: InformeIrComponent,
    canActivate: [authGuard]
  },
  {
    path: 'nucleos-ativos/contracheque',
    component: ContrachequeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'administracao/trocar-participante',
    component: TrocarParticipanteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'administracao/resultado-recadastramento',
    component: ResultadoRecadastramentoComponent,
    canActivate: [authGuard]
  }
];

export const MenuRoutes = RouterModule.forChild(routes);
