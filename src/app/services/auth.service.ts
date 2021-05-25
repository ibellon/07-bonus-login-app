import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private API_KEY = "AIzaSyCDP9ZqX7r5CU_1xBm8XFM3w1B6tGWdhPI";

  constructor() { }

  logout() {

  }

  login( usuario: UsuarioModel ) {

  }

  nuevoUsuario( usuario: UsuarioModel ) {

  }
  
}
