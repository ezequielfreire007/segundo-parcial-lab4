import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-area-clientes',
  templateUrl: './area-clientes.component.html',
  styleUrls: ['./area-clientes.component.scss']
})
export class AreaClientesComponent implements OnInit {

  usuario: Usuario;

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('user'));
    console.log(this.usuario);
  }

  ngOnInit() {
  }

}
