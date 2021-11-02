import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateRegisterComponent } from './create-register/create-register.component';
import { CreateLoginComponent } from './create-login/create-login.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateRegisterComponent,
    CreateLoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
