import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() usuarioActivo: boolean;

  constructor(private _auth: AuthService, private _router: Router) {
    // this.usuario = {email: "pepe@utn.com", nombre: "Pepe", password: "123", rol: "profesional"};
    // this.usuario = JSON.parse(localStorage.getItem('user'));



  }

  ngOnInit() {

  }

  logoutUser() {
    console.log(`Deslogueo del usuario`);
    this._auth.logoutUser();
    // this._auth.loggedIn();
    // location.reload();
  }

  traerUsuarioLocalStorage() {
    // this.usuario = JSON.parse(JSON.stringify(localStorage.getItem('user')));
    // const this_ = this;
    // this.usuario = JSON.parse(localStorage.getItem('user'));
    // this.usuarioActivo = true;
    console.log(this.usuario);
    console.log(this.usuarioActivo);
  }

  redirect(ruta: string) {
    switch (ruta) {
      case 'alta-servidor':
        this._router.navigate(['home/alta-servidor']);
        break;
      case 'home':
        this._router.navigate(['home']);
        break;
      default:
        break;
    }
  }

}
