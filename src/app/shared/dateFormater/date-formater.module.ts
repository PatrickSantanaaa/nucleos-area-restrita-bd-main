import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormaterDirective } from './dateFormater.directive';

@NgModule({
  declarations: [
    DateFormaterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateFormaterDirective
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ]
})
export class DateFormaterModule { }
