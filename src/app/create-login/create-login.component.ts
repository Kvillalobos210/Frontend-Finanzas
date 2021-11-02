import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
