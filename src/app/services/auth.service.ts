import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwHelper: JwtHelperService) { }

  public isAutheticates(): boolean {
    const token = localStorage.getItem('token');
    // verifico si el token espiro y retorno true o false
    return !this.jwHelper.isTokenExpired(token);
  }
}
