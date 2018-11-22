import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormGroup, Validator, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  // token: any;
  perfilForm: FormGroup;
  // loginUserData = {};

  constructor(private _auth: AuthService,
    private _router: Router, private fb: FormBuilder) {
    this.usuario = {};
    this._auth.loggedIn();
  }

  loginUser() {
    this._auth.loginUser(this.usuario)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(this.usuario));
        this._router.navigate(['/home']);
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.usuario.rol = 'normal';
    // console.log(`${this.usuario}`);
    // console.log(`${this.token}`);

  }

  botonUsuario1() {
    this.usuario = {
      email: 'pepe@utn.com',
      nombre: 'Pepe',
      password: '123',
      rol: 'profesional',
    };
  }

  botonUsuario2() {
    this.usuario = {
      email: 'juan@utn.com',
      nombre: 'Juan',
      password: '123',
      rol: 'normal',
    };
  }

  botonUsuario3() {
    this.usuario = {
      email: 'natalia@utn.com',
      nombre: 'Natalia',
      password: '123',
      rol: 'free',
    };
  }


}
