import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../models/usuario';
import { Perfil } from '../../models/ePerfil';
import { FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  perfi: Perfil;
  usuario: Usuario;
  token: any;
  countryForm: FormGroup;
  countries = ['USA', 'Canada', 'Uk'];

  constructor(private loginService: LoginService) {
    // if (this.usuario) {
    //   this.loginService.tokenlog(this.usuario).then( dato => {
    //     console.log(`usuario ${dato}`);
    //     this.token = dato;
    //   }).catch(this.usuario => {
    //     console.log(`error ${this.usuario.nombre}`);
    //   });
    // }


  }

  ngOnInit() {
    console.log(`usuario: ${this.usuario}`);
    console.log(`token: ${this.token}`);
  }


}
