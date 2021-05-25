import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private API_KEY = "AIzaSyCDP9ZqX7r5CU_1xBm8XFM3w1B6tGWdhPI";

  constructor(private http: HttpClient) { 

  }

  logout() {

  }

  login( usuario: UsuarioModel ) {
    
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      this.URL+"signInWithPassword?key="+this.API_KEY, 
      authData);

  }

  nuevoUsuario( usuario: UsuarioModel ) {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      this.URL+"signUp?key="+this.API_KEY, 
      authData);

  }
  
}
