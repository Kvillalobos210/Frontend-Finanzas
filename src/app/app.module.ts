import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateRegisterComponent } from './create-register/create-register.component';
import { CreateLoginComponent } from './create-login/create-login.component';
import { CreateInicioComponent } from './create-inicio/create-inicio.component';
import { DescuentoCarteraComponent } from './descuento-cartera/descuento-cartera.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CreateRegisterComponent,
    CreateLoginComponent,
    CreateInicioComponent,
    DescuentoCarteraComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
