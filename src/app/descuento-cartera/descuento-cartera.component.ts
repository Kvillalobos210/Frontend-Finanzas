import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { Bill } from '../model/bill';
import { BillService } from '../service/bill.service';
import {ActivatedRoute ,Router} from '@angular/router'
import { PortfolioService } from '../service/portfolio.service';
import { Portfolio } from '../model/portfolio';
@Component({
  selector: 'app-descuento-cartera',
  templateUrl: './descuento-cartera.component.html',
  styleUrls: ['./descuento-cartera.component.css']
})
export class DescuentoCarteraComponent implements OnInit {

  dias_ano='360'
  plazo_tasa='Anual'
  tipo_tasa='Efectiva'
  periodo_cap=''
  tasa_efectiva='14.8'
  tasa_efectiva_=''
  fecha_descuento='04/05/2021'

  fecha_emision='11/04/2021'
  fecha_pago='10/07/2021'
  total_facturado='15000'
  retencion='0'
  
  motivo=''
  tipo=''
  valor=''
  list_cgi=[{
    motivo:'Portes',
    tipo:'En efectivo',
    valor:'11.7'
  }];
  
  motivof=''
  tipof=''
  valorf=''
  list_cgf=[{
    motivo:'Portes',
    tipo:'En efectivo',
    valor:'17'
  }];
  list_factura=[{
    numTotal_Retention:0
  }]
  cambio=0
  TCEA=0
  fechas_tir:number[]
  valor_re=0
  valor_en:number[]
  bol=true
  fecha_d:string[]
  fecha_e:string[]
  fecha_p:string[]
  contador_facturas=0
  cf:number[]
  dias=0

  bill= new Bill();

  tir=0

  nombre_empresa=''

  portafolio= new Portfolio();

  id_porfatolio=JSON.parse(localStorage.getItem('idportfolio')||"{}")

  id_user=JSON.parse(localStorage.getItem('iduser')||"{}")


  constructor( private router: Router,private billService: BillService,private portafolioService:PortfolioService) { 
    this.fecha_d=[""]
    this.fecha_e=[""]
    this.fecha_p=[""]

    this.fechas_tir=[]
    this.valor_en=[]
    this.cf=[]

  }

  a="asd"+1;

  ngOnInit(): void {
    if(this.bol){
      //this.list_cgi.pop()
      //this.list_cgf.pop()
      this.list_factura.pop()
      //console.log(this.a)
    }
    this.cargar_datos()
  }

  cargar_datos(){

    console.log("lista vacia",this.list_factura)
    this.billService.getUserList().
    subscribe(datos=>{
      console.log("lista datos: ",datos)
      if(this.list_factura.length==0){
        //console.log(this.id_porfatolio)
        for (var i=0;i<datos.length;i++){
          if(datos[i].portfolioId==parseInt(this.id_porfatolio))
          this.list_factura.push(datos[i])
        }
      }
      console.log("lista: ",this.list_factura)
    })
  }

  guardar_bill(){

    /*
    var descuento=this.dividir_fecha(this.fecha_descuento)
    this.bill.dDiscount_Date.setDate(parseInt(descuento[0]))
    this.bill.dDiscount_Date.setMonth(parseInt(descuento[1]))
    this.bill.dDiscount_Date.setFullYear(parseInt(descuento[2]))
    this.bill.dDiscount_Date.toISOString()
    

    var emision=this.dividir_fecha(this.fecha_emision)
    this.bill.dEmission.setDate(parseInt(emision[0]))
    this.bill.dEmission.setMonth(parseInt(emision[1]))
    this.bill.dEmission.setFullYear(parseInt(emision[2]))
    this.bill.dEmission.toISOString()


    var pago=this.dividir_fecha(this.fecha_pago)
    this.bill.dPayment.setDate(parseInt(pago[0]))
    this.bill.dPayment.setMonth(parseInt(pago[1]))
    this.bill.dPayment.setFullYear(parseInt(pago[2]))
    this.bill.dPayment.toDateString()
    this.bill.dPayment=this.bill.dPayment.toISOString()

    */

    var descuento=this.dividir_fecha(this.fecha_descuento)
    this.bill.dDiscount_Date=descuento[2]+'-'+descuento[1]+'-'+descuento[1]

    var pago=this.dividir_fecha(this.fecha_pago)
    this.bill.dPayment=pago[2]+'-'+pago[1]+'-'+pago[0]

    
    var emision=this.dividir_fecha(this.fecha_emision)
    this.bill.dEmission=emision[2]+'-'+emision[1]+'-'+emision[0]


    this.bill.qTotal_Bill=parseInt(this.total_facturado)

    if(this.tipo_tasa=="Efectiva"){
      this.bill.type_Interest_RateId=1
    }if(this.tipo_tasa=="Nominal"){
      this.bill.type_Interest_RateId=2
    }

    this.bill.type_Capitalizacion=this.plazo_tasa

    //numTota_Retencion sera el TCEA de cada factura
    this.bill.numTotal_Retention=this.TCEA
    this.bill.portfolioId=this.id_porfatolio

    
    //console.log( "Facturaaa:  ",this.bill)
    //this.bill.numTotal_Retention=tceaaa

    this.billService.createBill(this.bill)
     .subscribe(datos=>console.log(datos), error=>console.log(error));
  }


  contador(){
    this.contador_facturas=this.contador_facturas+1
    //console.log(this.contador_facturas)
  }

  agregar_list_factura(tcea: number){
    var neww={
      numTotal_Retention:tcea
    }
    this.list_factura.push(neww)

  }
 
  agregar_list_cgf(m:string,t:string,v:string){
    var newcgi={
      motivo:m,
      tipo:t,
      valor:v
    }
    this.list_cgf.push(newcgi)
  }

  agregar_list_cgi(m:string,t:string,v:string){
    var newcgi={
      motivo:m,
      tipo:t,
      valor:v
    }
    this.list_cgi.push(newcgi)
  }

  agregar_datos(){
    //console.log("dias año",this.dias_ano)
    //console.log("dias",this.dias)
    //console.log("plazo tasa",this.plazo_tasa)
    //console.log("tasaefectiva",this.tasa_efectiva)
 

  }

  dividir_fecha(fecha:string){
    var fecha_result=fecha.split("/")
    return fecha_result
  }

  conversion_tasa(){

    var x:number=0
    this.dias=this.restaFechas(this.fecha_descuento,this.fecha_pago)
    
    this.tasa_efectiva_=this.tasa_efectiva
    console.log(this.dias)

    //falta arreglar el x=math... del primer if
    if(this.tipo_tasa=='Nominal'){

      if(this.periodo_cap=="Diario"){

        if(this.plazo_tasa=='Diario'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1)),this.dias)-1
          this.tasa_efectiva=String(x)

        }if(this.plazo_tasa=='Quincenal'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/15)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Mensual'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/30)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Bimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/60)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Trimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/90)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Cuatrimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/120)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Semestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/180)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Anual'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/360)),this.dias)-1
          this.tasa_efectiva=String(x)
        }

      } if(this.periodo_cap=="Quincenal"){

        if(this.plazo_tasa=='Diario'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.06666)),360)-1
          this.tasa_efectiva=String(x)

        }if(this.plazo_tasa=='Quincenal'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Mensual'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/2)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Bimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/4)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Trimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/6)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Cuatrimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/8)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Semestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/12)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Anual'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/24)),this.dias)-1
          this.tasa_efectiva=String(x)
        }

      }if(this.periodo_cap=="Mensual")
      {

        if(this.plazo_tasa=='Diario'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.03333)),this.dias)-1
          this.tasa_efectiva=String(x)

        }if(this.plazo_tasa=='Quincenal'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.5)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Mensual'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Bimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/2)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Trimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/3)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Cuatrimestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/4)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Semestral'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/6)),this.dias)-1
          this.tasa_efectiva=String(x)
        }
        if(this.plazo_tasa=='Anual'){
          x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/12)),this.dias)-1
          this.tasa_efectiva=String(x)

        }
      }
      if(this.periodo_cap=="Bimestral")
      {
  
          if(this.plazo_tasa=='Diario'){
            x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.016666)),this.dias)-1
            this.tasa_efectiva=String(x)
  
          }if(this.plazo_tasa=='Quincenal'){
            x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.25)),this.dias)-1
            this.tasa_efectiva=String(x)
          }
          if(this.plazo_tasa=='Mensual'){
            x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.5)),this.dias)-1
            this.tasa_efectiva=String(x)
          }
          if(this.plazo_tasa=='Bimestral'){
            x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1)),this.dias)-1
            this.tasa_efectiva=String(x)
          }
          if(this.plazo_tasa=='Trimestral'){
            x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1.5)),this.dias)-1
            this.tasa_efectiva=String(x)
          }
          if(this.plazo_tasa=='Cuatrimestral'){
            x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/2)),this.dias)-1
            this.tasa_efectiva=String(x)
          }
          if(this.plazo_tasa=='Semestral'){
            x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/3)),this.dias)-1
            this.tasa_efectiva=String(x)
          }
          if(this.plazo_tasa=='Anual'){
            x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/6)),this.dias)-1
            this.tasa_efectiva=String(x)
          }
        }
        if(this.periodo_cap=="Trimestral")
        {
    
            if(this.plazo_tasa=='Diario'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.0111111)),this.dias)-1
              this.tasa_efectiva=String(x)
    
            }if(this.plazo_tasa=='Quincenal'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.166666)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Mensual'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.33333)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Bimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/0.6666666)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Trimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Cuatrimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1.3333)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Semestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/2)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Anual'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/4)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
          }
          if(this.periodo_cap=="Cuatrimestral")
        {
    
            if(this.plazo_tasa=='Diario'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(1/120))),this.dias)-1
              this.tasa_efectiva=String(x)
    
            }if(this.plazo_tasa=='Quincenal'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(15/120))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Mensual'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(30/120))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Bimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(60/120))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Trimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(90/120))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Cuatrimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Semestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(180/120))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Anual'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/3)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
          }
          if(this.periodo_cap=="Semestral")
        {
    
            if(this.plazo_tasa=='Diario'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(1/180))),this.dias)-1
              this.tasa_efectiva=String(x)
    
            }if(this.plazo_tasa=='Quincenal'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(15/180))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Mensual'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(30/180))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Bimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(60/180))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Trimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(90/180))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Cuatrimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(120/180))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Semestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(180/180))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Anual'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/2)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
          }
          if(this.periodo_cap=="Semestral")
        {
    
            if(this.plazo_tasa=='Diario'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(1/360))),this.dias)-1
              this.tasa_efectiva=String(x)
    
            }if(this.plazo_tasa=='Quincenal'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(15/360))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Mensual'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(30/360))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Bimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(60/360))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Trimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(90/360))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Cuatrimestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(120/360))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Semestral'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/(180/360))),this.dias)-1
              this.tasa_efectiva=String(x)
            }
            if(this.plazo_tasa=='Anual'){
              x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1)),this.dias)-1
              this.tasa_efectiva=String(x)
            }
          }
  

     
      
      return x
    }

    else{

      
      if(this.plazo_tasa=='Diario'){
        x=Math.pow(1+(parseFloat(this.tasa_efectiva)/100), this.dias/1)-1
        this.tasa_efectiva=String(x)
      }if(this.plazo_tasa=='Quincenal'){
        x=Math.pow(1+(parseFloat(this.tasa_efectiva)/100), this.dias/15)-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Mensual'){
        x=Math.pow(1+(parseFloat(this.tasa_efectiva)/100), this.dias/30)-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Bimestral'){
        x=Math.pow(1+(parseFloat(this.tasa_efectiva)/100), this.dias/60)-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Trimestral'){
        x=Math.pow(1+(parseFloat(this.tasa_efectiva)/100), this.dias/90)-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Cuatrimestral'){
        x=Math.pow(1+(parseFloat(this.tasa_efectiva)/100), this.dias/120)-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Semestral'){
        x=Math.pow(1+(parseFloat(this.tasa_efectiva)/100), this.dias/180)-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Anual'){
        x=Math.pow(1+(parseFloat(this.tasa_efectiva)/100), this.dias/360)-1     
        this.tasa_efectiva=String(x)
      }
      
      return x
    }
    
  }

  tasa_descontada(){

    var x

    x=parseFloat(this.tasa_efectiva)/(1+parseFloat(this.tasa_efectiva))

    return x
  } 

  total_gi(){

    var x=0
    if(this.list_cgi){
      for (var i=0;i<this.list_cgi.length;i++ ){
        if(this.list_cgi[i].tipo==='Porcentaje'){
          x=parseFloat(this.list_cgi[i].valor)/100*parseFloat(this.total_facturado)+x;

        }else{
          x=parseFloat(this.list_cgi[i].valor)+x
        }
      }
    }
    return x

  }

  total_gf(){

    var x=0
    if(this.list_cgf){
      for (var i=0;i<this.list_cgf.length;i++ ){
        if(this.list_cgf[i].tipo==='Porcentaje'){
          x=parseFloat(this.list_cgf[i].valor)/100*parseFloat(this.total_facturado)+x;

        }else{
          x=parseFloat(this.list_cgf[i].valor)+x
        }
      }
    }
    return x

  }

  descuento(){
    var x
    x=parseFloat(this.total_facturado)*parseFloat(this.tasa_efectiva)
    return x
  }
  restaFechas(f1:string,f2:string)
 {
  var aFecha1 = f1.split('/');
  var aFecha2 = f2.split('/');
  var fFecha1 = Date.UTC(parseInt(aFecha1[2]),parseInt(aFecha1[1])-1,parseInt(aFecha1[0]));
  var fFecha2 = Date.UTC(parseInt(aFecha2[2]),parseInt(aFecha2[1])-1,parseInt(aFecha2[0]));
  var dif = fFecha2 - fFecha1;
  var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
  return dias;
 }

  calcular_tcea(){
    var gf=this.total_gf()
    var gi= this.total_gi()
    var TEP = this.conversion_tasa()
    console.log(TEP)
    var d=TEP/(1+TEP)
    var descuento=d*parseFloat(this.total_facturado)
    var val_neto=parseFloat(this.total_facturado)-descuento
    var dias=this.restaFechas(this.fecha_descuento,this.fecha_pago)

    var valor_re=val_neto-gi
    var valor_en=parseFloat(this.total_facturado)+gf

    var tcea

    var aux1=valor_en/valor_re
    var aux2=parseFloat(this.dias_ano)/dias

    tcea=Math.pow(aux1,aux2)-1

    console.log("tcea: ",tcea)

    if(this.cambio){
    this.valor_en.shift()
    this.fechas_tir.shift()
    }

    this.fechas_tir.push(dias)
    this.valor_re=this.valor_re+valor_re
    this.valor_en.push(valor_en)
    //console.log("valor re ",this.valor_re)
    //console.log("valor en despues",this.valor_en)
    //console.log("fechas tir ",this.fechas_tir)

    this.billService.getUserList().
      subscribe(datos=>{
        if(this.list_factura.length==0){
          for (var i=0;i<datos.length;i++){
            if(datos[i].portfolioId==parseInt(this.id_porfatolio))
            this.list_factura.push(datos[i])
          }
        }
        console.log("restringido: ",this.list_factura)
      })
    //this.list_factura.push()

    this.agregar_list_factura(tcea)
    this.cambio=0
    this.TCEA=tcea
    
    this.tasa_efectiva=this.tasa_efectiva_
    this.guardar_bill()
    
    return tcea
  }

  IRRCalc() {
    console.log("entro al a funcion")
    this.cambio=1


    var cf=[]
    var fechas=[]

    cf=this.valor_en
    cf.unshift(-this.valor_re)
    
    fechas=this.fechas_tir
    fechas.unshift(0)
    

    var min = 0.0;
    var max = 1.0;
    var guest = 0.5
    do {
      //console.log("entro al while")
      guest = (min + max) / 2;
      var NPV = 0;
      for (var j=0; j<cf.length; j++) {
            NPV += cf[j]/Math.pow((1+guest),fechas[j]/parseInt(this.dias_ano));
      }
      if (NPV > 0) {
        min = guest;
      }
      else {
        max = guest;
      }
      console.log(guest)
    } while(Math.abs(NPV) > 0.000001);
    console.log(guest)
    this.tir=guest
    return guest * 100
  }

  volver(){
    
    this.router.navigate(['Lista']);
  }


update_tir(){

  this.portafolioService.getUserList().
    subscribe(datos=>{
      for (var i =0; i<datos.length;i++){
        
        //console.log(i," : ",datos[i].name)
        //console.log(i," : ",datos[i].id)
          if(datos[i].id==parseInt(this.id_porfatolio)){

            //console.log(datos[i].name)
            this.nombre_empresa=datos[i].name
            console.log("nombre empresa: ",this.nombre_empresa)

            this.portafolio.id=0
            this.portafolio.name=this.nombre_empresa
            this.portafolio.tir=this.tir
            this.portafolio.userId=parseInt(this.id_user)


            this.portafolioService.updateList(this.id_porfatolio,this.portafolio).
            subscribe(datos=>{console.log(datos)
            },error=>console.log(error));

          }
      }
          })

  


}


}
