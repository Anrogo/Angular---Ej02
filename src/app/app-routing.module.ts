import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevaOfertaComponent } from './pages/ofertas/nueva-oferta/nueva-oferta.component';
import { OfertaComponent } from './pages/ofertas/oferta/oferta.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home/ofertas-admin',
    component: OfertasComponent
  },
  {
    path: 'home/ofertas/:id',
    component: OfertaComponent
  },
  {
    path: 'nueva-oferta',
    component: NuevaOfertaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
