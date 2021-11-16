import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router'
import { User } from '../model/user';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.css']
})
export class CreateRegisterComponent implements OnInit {

  user: User =new User();

  constructor(private route: ActivatedRoute,  private router : Router, private userService: UserService) { }

  ngOnInit(): void {
    
  }

  

  insertUser(){
    this.userService.createUser(this.user)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.user = new User();
      this.router.navigate(['InicioSesion']);
  }



}
