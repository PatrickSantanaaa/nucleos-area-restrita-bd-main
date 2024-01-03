import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'formataMesAno',
  standalone: true,
})
export class FormataMesAnoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if (!/^\d{6}$/.test(value)) {
      console.error("Formato de entrada inválido. Use o formato YYYYMM.");
      return null;
    }
  
    // Divida a string em ano e mês
    const ano = value.substring(0, 4);
    const mes = value.substring(4, 6);
  
    // Crie um objeto de data com o ano e mês
    const data = new Date(`${ano}-${mes}-01`);
  
    // Obtenha o mês e o ano formatados
    const mesFormatado = ("0" + (data.getMonth() + 1)).slice(-2);
    const anoFormatado = data.getFullYear();
  
    // Retorne a data formatada
    return `${mesFormatado}/${anoFormatado}`;
  }
}
