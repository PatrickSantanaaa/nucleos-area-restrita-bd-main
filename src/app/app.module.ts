import { NgApexchartsModule } from 'ng-apexcharts';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRoutes } from './login/login.routing';
import { MenuRoutes } from './menu/menu.routing';
import { SysprevGridInlineModule, SysprevRecursosModule } from 'sysprev-recursos';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FieldsetModule } from 'primeng/fieldset';
import { DadosPessoaisComponent } from './telas/cadastro/dados-pessoais/dados-pessoais.component';
import { PoliticamenteExpostaComponent } from './telas/cadastro/politicamente-exposta/politicamente-exposta.component';
import { FatcaComponent } from './telas/cadastro/fatca/fatca.component';
import { ResumoPlanoComponent } from './telas/cadastro/resumo-plano/resumo-plano.component';
import { ExtratoSaldoComponent } from './telas/arrecadacao/extrato-saldo/extrato-saldo.component';
import { SimuladoresDesligamentoComponent } from './telas/simuladores/simuladores-desligamento/simuladores-desligamento.component';
import { DocumentosEntidadeComponent } from './telas/documentos-entidade/documentos-entidade.component';
import { AlterarSenhaComponent } from './telas/alterar-senha/alterar-senha.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { LoginModule } from './login/login.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MenuModule } from './menu/menu.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TrocarParticipanteComponent } from './telas/administrador/trocar-participante/trocar-participante.component';
import { CalendarModule } from 'primeng/calendar';
import { CadastroDocumentosComponent } from './telas/documentos/cadastro-documentos/cadastro-documentos.component';
import { TempoServicoComponent } from './telas/previdencia/tempo-servico/tempo-servico.component';
import { ReservaPoupancaComponent } from './telas/previdencia/reserva-poupanca/reserva-poupanca.component';
import { ConsultaContrachequeComponent } from './telas/previdencia/consulta-contracheque/consulta-contracheque.component';
import { InformeRendimentosComponent } from './telas/previdencia/informe-rendimentos/informe-rendimentos.component';
import { ConsultaSaldoDevedorComponent } from './telas/emprestimos/consulta-saldo-devedor/consulta-saldo-devedor.component';
import { DialogModule } from 'primeng/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MessagesModule } from 'primeng/messages';
import { EstatutoRegularmentoComponent } from './telas/documentos/estatuto-regularmento/estatuto-regularmento.component';
import { SimulacaoEmprestimoComponent } from './telas/emprestimos/simulacao-emprestimo/simulacao-emprestimo.component';
import { CardModule } from 'primeng/card';
import { PropostaEstatutoComponent } from './telas/documentos/proposta-estatuto/proposta-estatuto.component';
import { AdesaoPatrocinadoraComponent } from './telas/documentos/adesao-patrocinadora/adesao-patrocinadora.component';
import { RetiradaPatrocinioComponent } from './telas/documentos/retirada-patrocinio/retirada-patrocinio.component';
import { GerenciamentoPlanoComponent } from './telas/documentos/gerenciamento-plano/gerenciamento-plano.component';
import { ParticipacaoRelevanteComponent } from './telas/documentos/participacao-relevante/participacao-relevante.component';
import { PrestadoresServicosComponent } from './telas/documentos/prestadores-servicos/prestadores-servicos.component';
import { ExtratoAtasComponent } from './telas/documentos/extrato-atas/extrato-atas.component';
import { AjuntamentoCondutaComponent } from './telas/documentos/ajuntamento-conduta/ajuntamento-conduta.component';
import { InformeIrComponent } from './telas/emprestimos/informe-ir/informe-ir.component';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { RecadastramentoComponent } from './telas/previdencia/recadastramento/recadastramento.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { TreeModule } from 'primeng/tree';
import { NodeService } from './telas/documentos/adesao-patrocinadora/nodeservice';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { DropdownModule } from 'primeng/dropdown';
import { ContribuicaoComponent } from './telas/previdencia/contribuicao/contribuicao.component';
import { BoletosComponent } from './telas/emprestimos/boletos/boletos.component';
import { ContrachequeComponent } from './telas/nucleos-ativos/contracheque/contracheque.component';
import { ResultadoRecadastramentoComponent } from './telas/administrador/resultado-recadastramento/resultado-recadastramento.component';
import { FormataMesAnoPipe } from './core/pipe/formataMesAno.pipe';

registerLocaleData(localePt);

const Module = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
]

@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    PoliticamenteExpostaComponent,
    FatcaComponent,
    ResumoPlanoComponent,
    ExtratoSaldoComponent,
    SimuladoresDesligamentoComponent,
    DocumentosEntidadeComponent,
    AlterarSenhaComponent,
    TrocarParticipanteComponent,
    CadastroDocumentosComponent,
    TempoServicoComponent,
    ReservaPoupancaComponent,
    ConsultaContrachequeComponent,
    InformeRendimentosComponent,
    ConsultaSaldoDevedorComponent,
    EstatutoRegularmentoComponent,
    SimulacaoEmprestimoComponent,
    PropostaEstatutoComponent,
    AdesaoPatrocinadoraComponent,
    RetiradaPatrocinioComponent,
    GerenciamentoPlanoComponent,
    ParticipacaoRelevanteComponent,
    PrestadoresServicosComponent,
    ExtratoAtasComponent,
    AjuntamentoCondutaComponent,
    InformeIrComponent,
    RecadastramentoComponent,
    ContribuicaoComponent,
    BoletosComponent,
    ContrachequeComponent,
    ResultadoRecadastramentoComponent,
  ],
  imports: [
    CommonModule,
    Module,
    LoginModule,
    MenuModule,
    LoginRoutes,
    MenuRoutes,
    SysprevRecursosModule,
    FieldsetModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    CurrencyMaskModule,
    RadioButtonModule,
    MatIconModule,
    TableModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ToastModule,
    ToggleButtonModule,
    ButtonModule,
    BadgeModule,
    MatTooltipModule,
    SysprevGridInlineModule,
    CalendarModule,
    DialogModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MessagesModule,
    CardModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTreeModule,
    TreeModule,
    MatProgressSpinnerModule,
    DropdownModule,
    FormataMesAnoPipe
  ],
  providers: [
    provideNgxMask(),    {
      provide: LOCALE_ID,
      useValue: "pt"
    },
    NodeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
