import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Guards
// import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
// import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';
import { AuthGuard } from './auth/auth-guard'; // Guards para routas


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
