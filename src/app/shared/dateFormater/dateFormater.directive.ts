import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dateFormatter]'
})
export class DateFormaterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    const value = event.target.value;
    const formatted = value
      // Remove todos os caracteres não numéricos
      .replace(/\D/g, '')
      // Insere barras após o segundo e o terceiro dígitos
      .replace(/^(\d{2})(\d)/g, '$1/$2')
      .replace(/^(\d{2})\/(\d{2})(\d)/g, '$2/$1/$3')
      // Limita o número de caracteres a 10
      .slice(0, 10);
    event.target.value = formatted;
  }
}
