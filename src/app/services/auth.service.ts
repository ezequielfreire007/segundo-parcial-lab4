import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends GenericService {

  constructor(protected http: HttpClient, private _router: Router) {
    super(http);
  }

  public loginUser(usuario: Usuario): any {
    return super.post<any>('auth/login', usuario);
  }

  // registerUser(user) {
  //   return this.http.post<any>(this._registerUrl, user);
  // }

  public logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }

}
