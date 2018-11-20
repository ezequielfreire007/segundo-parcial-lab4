import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends GenericService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public tokenlog(usuario: Usuario) {
    return super.post<any>('auth/login', usuario);
  }

}
