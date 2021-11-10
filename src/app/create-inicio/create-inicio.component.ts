import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-create-inicio',
  templateUrl: './create-inicio.component.html',
  styleUrls: ['./create-inicio.component.css']
})
export class CreateInicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
