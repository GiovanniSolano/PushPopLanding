import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaMovilComponent } from './components/pagina-movil/pagina-movil.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'pagina-movil', component: PaginaMovilComponent},
  {path: '', component: InicioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
