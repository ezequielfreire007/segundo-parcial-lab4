import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;
  usuarioActivo: boolean;

  constructor(private _router: Router) {
    this.usuario = JSON.parse(localStorage.getItem('user'));
    if (this.usuario) {
      this.usuarioActivo = true;
    }

    console.log(this.usuario);
  }

  ngOnInit() {
  }



}
