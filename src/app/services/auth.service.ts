import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private API_KEY = "AIzaSyCDP9ZqX7r5CU_1xBm8XFM3w1B6tGWdhPI";
  private userToken: string;

  constructor(private http: HttpClient) { 
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel ) {
    
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      this.URL+"signInWithPassword?key="+this.API_KEY, 
      authData).pipe(
        map( resp => {
          console.log("Entró en el map del RXJS");
          this.guardarToken(resp['idToken'])
          return resp;
        })
      );

  }

  nuevoUsuario( usuario: UsuarioModel ) {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      this.URL+"signUp?key="+this.API_KEY, 
      authData).pipe(
        map( resp => {
          console.log("Entró en el map del RXJS");
          this.guardarToken(resp['idToken'])
          return resp;
        })
      );

  }
  
  private guardarToken( idToken: string ) {
    
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

  }

  leerToken() {
    
    if(localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }
    else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {

    return this.userToken.length > 2;
  }
}
