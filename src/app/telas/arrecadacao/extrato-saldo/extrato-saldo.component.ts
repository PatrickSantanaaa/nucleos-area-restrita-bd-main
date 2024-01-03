import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AutenticacaoExtratoSaldoService } from 'src/app/service/autenticacaoExtSaldo.service';

@Component({
  selector: 'app-extrato-saldo',
  templateUrl: './extrato-saldo.component.html',
  styleUrls: ['./extrato-saldo.component.scss']
})
export class ExtratoSaldoComponent {
  formulario!: UntypedFormGroup;
  mesDe!: string;
  anoDe!: string;
  mesAnoDe!: string;
  mesAte!: string;
  anoAte!: string;
  mesAnoAte!: string;

  constructor(
    private builder: UntypedFormBuilder,
    private extratoService: AutenticacaoExtratoSaldoService,
    private messageService: MessageService
  ) {
    this.formulario = this.builder.group({
      de: ['', [Validators.required]],
      ate: ['', [Validators.required]]
    });
  }

  gerarExtrato() {
    const deValue = this.formulario.value.de;
    const ateValue = this.formulario.value.ate;

    if (!deValue || !ateValue) {
      this.badRequest2(); // Campos em branco
      return;
    }

    if (!this.temSeisDigitos(deValue) || !this.temSeisDigitos(ateValue)) {
      this.badRequest1(); // Campos não têm 6 dígitos
      return;
    }

    const mesDe = deValue.slice(0, -4);
    const anoDe = deValue.slice(2);

    const mesAte = ateValue.slice(0, -4);
    const anoAte = ateValue.slice(2);

    if (mesDe > '12' || mesAte > '12') {
      this.badRequest3(); // Mês maior que 12
      return;
    }

    if (anoDe < '1900' || anoAte < '1900') {
      this.badRequest4(); // Ano menor que 1900
      return;
    }

    this.mesAnoDe = mesDe + '/' + anoDe;
    this.mesAnoAte = mesAte + '/' + anoAte;

    console.warn('de ' + this.mesAnoDe);
    console.warn('ate ' + this.mesAnoAte);

    this.extratoService.buscarExtratoSaldo(this.mesAnoDe, this.mesAnoAte).subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'extratoIndividual.pdf';
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      },
      (error) => {
        console.error('Erro ao baixar o arquivo', error);
      }
    );
  }

  temSeisDigitos(value: string): boolean {
    return /^\d{6}$/.test(value);
  }

  badRequest2() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'Preencha ambos os campos corretamente.' });
  }

  badRequest1() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'Preencha os campos com exatamente 6 dígitos.' });
  }

  badRequest3() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'Preencha o mês corretamente.' });
  }

  badRequest4() {
    this.messageService.add({ severity: 'error', summary: '', detail: 'Preencha o ano corretamente.' });
  }
}
