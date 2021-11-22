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
    this.elimianr_local()
  }

  elimianr_local(){
    localStorage.removeItem('iduser')
    localStorage.removeItem('idportfolio')
  }

  loadDataUsers(){
    var x = this.authservice.Auth(this.formModel).subscribe(
      datos=>{
        this.aux=datos; console.log("s",this.aux.idf);
        return this.aux.idf
      },
      error=>console.log("errrror",error));
    
      if(this.aux.idf!=undefined){
        localStorage.setItem('iduser',this.aux.idf)
        this.router.navigate(['Lista']);
      }
  }


}
