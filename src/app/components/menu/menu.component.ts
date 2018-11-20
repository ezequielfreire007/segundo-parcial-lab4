import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  logoutUser() {
    console.log(`Deslogueo del usuario`);
    this._auth.logoutUser();
    location.reload();
  }

}
