import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SysprevRecursosModule } from 'sysprev-recursos';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutes,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SysprevRecursosModule,
    MatInputModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatDatepickerModule,
    ToastModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [provideNgxMask()]
})
export class LoginModule { }
