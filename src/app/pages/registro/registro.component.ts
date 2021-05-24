import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() { 

    this.usuario = new UsuarioModel();

  }

  onSubmit(form: NgForm) {

    if(form.invalid) {
      return;
    }

    console.log("Envío del Usuario: ",this.usuario);
    console.log("Formulario: ", form);
  }

}
