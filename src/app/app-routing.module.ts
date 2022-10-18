import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanesComponent } from './page/planes/planes.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full',redirectTo: 'inicio'
  },

  {
    path: 'inicio', component: InicioComponent
  },

  {
    path: 'planes', component: PlanesComponent
  },

  {
    path: 'contactanos', component: ContactanosComponent
  },

  {
    path: 'register', component: RegisterComponent
  },

  {
    path: 'login', component: LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
