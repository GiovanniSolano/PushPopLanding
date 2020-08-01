import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.model';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  usuario: Usuario;

  constructor(public _usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  registrarInfo(form: NgForm) {


    this.usuario = form.value;

    this._usuarioService.registrarInformacion(this.usuario)
        .subscribe(resp => {

          form.reset();
          

          Swal.fire({
            icon: 'success',
            title: 'Excelente',
            text: resp,
          });


        });
  }

}
