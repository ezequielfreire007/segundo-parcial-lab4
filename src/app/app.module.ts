import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // formularios
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt'; // token

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { GenericService } from './services/generic.service';
import { AuthGuard } from './auth/auth-guard';
import { AreaClientesComponent } from './components/area-clientes/area-clientes.component';
import { AltaServidorComponent } from './components/alta-servidor/alta-servidor.component';



export function getToken(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    AreaClientesComponent,
    AltaServidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // [JwtModule.forRoot({
    //   config: {
    //       tokenGetter: (getToken),
    //       whitelistedDomains: ['localhost:8080', 'localhost:4200']
    //   }
    // })]
    // JwtModule.forRoot({})
  ],
  providers: [
    AuthService, GenericService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
