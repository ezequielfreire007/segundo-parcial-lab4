import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../services/login.service';
import { Usuario } from '../../models/usuario';
import { Perfil } from '../../models/ePerfil';
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
  token: any;
  perfilForm: FormGroup;
  // loginUserData = {};

  constructor(private _auth: AuthService,
    private _router: Router, private fb: FormBuilder) {
    this.usuario = {};
  }

  loginUser() {
    this._auth.loginUser(this.usuario)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/home']);
      },
      err => console.log(err)
    );
  }

  ingresar() {
    console.log(this.usuario);

    console.log('procesos de token');

    // this.loginService.tokenlog(this.usuario)
    // .then( dato => {
    //   console.log(dato);
    //   // guardo el token el localstorage
    //    localStorage.setItem('token', JSON.parse(JSON.stringify(dato)));

    //    const token = localStorage.getItem('token');
    //    const tokeni = this.jwt.decodeToken(token);
    //    console.log(tokeni);

    //   // this.router.navigate(['home']);
    // })
    // .catch( error => console.log(`error en token ${error}`));

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
