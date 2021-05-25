import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  
  constructor() { }

  ngOnInit() {

    this.usuario = new UsuarioModel();
  
  }

  onSubmit(form: NgForm) {

    if(form.invalid) {
      return;
    }

    Swal.fire({

      allowOutsideClik: false,

      title: 'Autenticando usuario',

      text: 'Espere por favor...',

      icon: 'info'

    });
    Swal.showLoading();

    console.log("Envío del formulario: ", this.usuario);
    console.log("Formulario: ", form);

  }

}
