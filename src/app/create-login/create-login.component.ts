import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {
  
  formModel={
    Username: '',
    Password: ''
  }
  users: User[]=[];

  constructor(private router: Router , private userService: UserService) { }

  ngOnInit(): void {

  }

  loadDataUsers(){
    this.userService.getUserList()
    .subscribe(users=>this.users=users);
  }

  




}
