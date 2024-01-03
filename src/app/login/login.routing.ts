import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MenuComponent } from '../menu/menu.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {  path: '', component: LoginComponent,
  },
  {
    path: 'menu',
    loadChildren: () => import('src/app/menu/menu.module').then((m) => m.MenuModule),
    component: MenuComponent,
    canActivate: [authGuard]
  }
];

export const LoginRoutes = RouterModule.forChild(routes);
