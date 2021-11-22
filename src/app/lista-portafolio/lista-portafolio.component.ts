import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../model/portfolio';
import { PortfolioService } from '../service/portfolio.service';
import {ActivatedRoute ,Router} from '@angular/router'

@Component({
  selector: 'app-lista-portafolio',
  templateUrl: './lista-portafolio.component.html',
  styleUrls: ['./lista-portafolio.component.css']
})
export class ListaPortafolioComponent implements OnInit {

  constructor(private router : Router,private portafolioService: PortfolioService) { }

  a=1
  b=2
  portafolio = new Portfolio();
  portafolio_list =[{
    id:0,
    name:'',
    tir:0,
    userId:0
  }]

  id_Actual=JSON.parse(localStorage.getItem('iduser')||"{}")

  

  ngOnInit(): void {
    this.portafolio_list.pop()
    //console.log(this.portafolio_list)
    this.filtro()
  }

  filtro(){
    this.portafolioService.getUserList().
    subscribe(datos=>{
      if(this.portafolio_list.length==0){
      for (var i=0;i<datos.length;i++){
        if(datos[i].userId==parseInt(this.id_Actual))
        this.portafolio_list.push(datos[i])
        
   
      }console.log("restringido: ",this.portafolio_list)
    }
      },error=>console.log(error));
  }

  loadDataUsers(){
  }

  agregar()
  {
    for(var i =0;i<=this.portafolio_list.length+5;i++){
    this.portafolio_list.shift()
    }
    this.portafolio.userId=this.id_Actual
    this.portafolio.tir=0
    this.portafolioService.createUser(this.portafolio)
      .subscribe(datos=>console.log(datos),error=>console.log(error));


  }
  ir(x:number){
    let idstr : string=String(x)
    localStorage.setItem('idportfolio',idstr)
    this.router.navigate(['Cartera']);

  }

}
