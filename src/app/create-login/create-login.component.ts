import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Auth } from '../model/auth';
import { AuthenticationSer } from '../service/auth.service';
import {Auth_user} from '../model/athenticateuser'

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {
  
  formModel={
    username: '',
    password: ''
  }

  auth_user= new Auth_user

  aux:any

  constructor(private router: Router , private authservice: AuthenticationSer) { }

  ngOnInit(): void {

  }

  loadDataUsers(){

    var x = this.authservice.Auth(this.formModel).subscribe(
      
      datos=>{
        this.aux=datos; console.log("s",this.aux.id); 

        return this.aux.id
      },
      error=>console.log(error));

      //console.log("dataid: ",this.aux.id

      if(x){
        this.router.navigate(['Cartera']);
      }

  }



  
  





}
