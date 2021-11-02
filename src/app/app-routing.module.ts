import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateRegisterComponent } from './create-register/create-register.component';
import { CreateLoginComponent } from './create-login/create-login.component';

const routes: Routes = [
 {path: '', redirectTo:'customer', pathMatch:'full'},
 {path: 'Registro', component: CreateRegisterComponent},
 {path: 'InicioSesion', component: CreateLoginComponent},
    
];
  
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
  