import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaMovilComponent } from './components/pagina-movil/pagina-movil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NosotrosComponent,
    ContactoComponent,
    ProyectosComponent,
    NavComponent,
    TecnologiasComponent,
    FooterComponent,
    PaginaMovilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
