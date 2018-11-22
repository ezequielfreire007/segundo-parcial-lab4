import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Guards
// import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
// import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';
import { AuthGuard } from './auth/auth-guard'; // Guards para routas
import { MenuComponent } from './components/menu/menu.component';
import { AreaClientesComponent } from './components/area-clientes/area-clientes.component';
import { AltaServidorComponent } from './components/alta-servidor/alta-servidor.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
          children: [
            {path: '', component: AreaClientesComponent, canActivate: [AuthGuard] },
            {path: 'alta-servidor', component: AltaServidorComponent, canActivate: [AuthGuard] },
            {path: 'menu', component: MenuComponent, canActivate: [AuthGuard] } // cambiar por las rutas correctas
          ]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
