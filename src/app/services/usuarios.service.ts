import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = environment.url;

  constructor(private http: HttpClient) { }


  registrarInformacion(usuario: Usuario) {

    return this.http.post(this.url, usuario).pipe(
      map((resp: any) => {
        return resp.message;
      })
    );

  }
}
