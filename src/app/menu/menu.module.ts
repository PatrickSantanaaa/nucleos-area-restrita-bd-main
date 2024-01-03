import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuRoutes } from './menu.routing';
import { RouterModule } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from '../shared/mega-menu/mega-menu.module';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MenuRoutes,
    RouterModule,
    FieldsetModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HeaderModule,
    ToastModule,
    MegaMenuModule
  ]
})
export class MenuModule { }
