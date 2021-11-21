import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-descuento-cartera',
  templateUrl: './descuento-cartera.component.html',
  styleUrls: ['./descuento-cartera.component.css']
})
export class DescuentoCarteraComponent implements OnInit {

  dias_ano='360'
  plazo_tasa='Anual'
  tipo_tasa='Efectiva'
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
    tcea:0
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

  constructor() { 
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
      console.log(this.a)
    }
    //this.conversion_tasa('5')
    //this.conversion_tasa()
  }

  contador(){
    this.contador_facturas=this.contador_facturas+1
    //console.log(this.contador_facturas)
  }

  agregar_list_factura(tcea: number){
    var neww={
      tcea:tcea
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
    console.log("dias año",this.dias_ano)
    console.log("dias",this.dias)
    console.log("plazo tasa",this.plazo_tasa)
    console.log("tasaefectiva",this.tasa_efectiva)
 

  }

  dividir_fecha(fecha:string){
    var fecha_result=fecha.split("/")
    return fecha_result
  }

  conversion_tasa(){

    var x:number=0
    this.dias=this.restaFechas(this.fecha_descuento,this.fecha_pago)
    
    this.tasa_efectiva_=this.tasa_efectiva

    //falta arreglar el x=math... del primer if
    if(this.tipo_tasa=='Nominal'){

      if(this.plazo_tasa=='Diario'){
        x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/1)),parseInt(this.dias_ano))-1
        this.tasa_efectiva=String(x)
      }if(this.plazo_tasa=='Quincenal'){
        x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/15)),parseInt(this.dias_ano))-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Mensual'){
        x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/30)),parseInt(this.dias_ano))-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Bimestral'){
        x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/60)),parseInt(this.dias_ano))-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Trimestral'){
        x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/90)),parseInt(this.dias_ano))-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Cuatrimestral'){
        x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/120)),parseInt(this.dias_ano))-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Semestral'){
        x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/180)),parseInt(this.dias_ano))-1
        this.tasa_efectiva=String(x)
      }
      if(this.plazo_tasa=='Anual'){
        x=Math.pow((1+(parseFloat(this.tasa_efectiva)/100/360)),parseInt(this.dias_ano))-1
        this.tasa_efectiva=String(x)
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
    console.log("valor re ",this.valor_re)
    console.log("valor en despues",this.valor_en)
    console.log("fechas tir ",this.fechas_tir)

    this.agregar_list_factura(tcea)
    this.cambio=0
    
    this.tasa_efectiva=this.tasa_efectiva_
    
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
      console.log("entro al while")
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
    this.TCEA=guest*100
    return guest * 100;
  }

}