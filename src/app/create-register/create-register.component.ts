import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.css']
})
export class CreateRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

}
