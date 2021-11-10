import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateRegisterComponent } from './create-register/create-register.component';
import { CreateLoginComponent } from './create-login/create-login.component';
import { CreateInicioComponent } from './create-inicio/create-inicio.component';
import { DescuentoCarteraComponent } from './descuento-cartera/descuento-cartera.component';


const routes: Routes = [
 {path: '',  component:  CreateInicioComponent },
 {path: 'Registro', component: CreateRegisterComponent},
 {path: 'InicioSesion', component: CreateLoginComponent},
 {path: 'Cartera', component: DescuentoCarteraComponent},
 
 
    
];
  
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
  