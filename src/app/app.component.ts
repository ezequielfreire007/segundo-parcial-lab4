import { Component, Input } from '@angular/core';
// import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mod-segundo';
  // usuario: Usuario = JSON.parse(localStorage.getItem('user'));
}
