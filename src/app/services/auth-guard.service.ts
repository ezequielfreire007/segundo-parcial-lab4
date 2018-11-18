import { Injectable } from '@angular/core';
// Agregamos los modulos para generar guars en las rutas
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  // Siempre que el usuario no este auntenticado lo redirecciona a login
  canActivate(): boolean {
    if (!this.auth.isAutheticates()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
