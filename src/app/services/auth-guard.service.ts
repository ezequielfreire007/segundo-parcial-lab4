import { Injectable } from '@angular/core';
// Agregamos los modulos para generar guars en las rutas
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this._router.navigate(['/login']);
      return false;
    }
  }

}
