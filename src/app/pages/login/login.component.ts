import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;
  
  constructor(private auth: AuthService, private router: Router) { 

  }

  ngOnInit() {

    if( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  
  }

  onSubmit(form: NgForm) {

    if(form.invalid) {
      return;
    }

    Swal.fire({

      title: 'Autenticando usuario',
      text: 'Espere por favor...',
      icon: 'info'

    });

    Swal.showLoading();

    this.auth.login(this.usuario)
    .subscribe(resp => {
      console.log(resp);

      if( this.recordarme ) {
        localStorage.setItem('email', this.usuario.email);
      }

      setTimeout(() => {
        Swal.close();
        this.router.navigateByUrl('/home');
      }, 1000);
    },
    err => {
      console.log(err.error.error.message);
      Swal.fire({

        title: 'Error al Autenticar',
        text: err.error.error.message,
        icon: 'error'
  
      });
    });

  }

}
