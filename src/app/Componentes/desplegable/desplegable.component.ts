import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ServicioAsignaturasService } from 'src/app/servicio/servicio-asignaturas.service';

@Component({
  selector: 'app-desplegable',
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.css']
})
export class DesplegableComponent implements OnInit {

  constructor(private servicio:ServicioAsignaturasService) { }

  ngOnInit(): void {
    if(localStorage.getItem(this.NombreAsignatura)!=undefined){


      this.listaAsignaturas=localStorage.getItem(this.NombreAsignatura)?.split("--");

    }
    else{

      this.listaAsignaturas.push("Sin asignatura");
    }
  }


  listaAsignaturas:any;

  NombreAsignatura="NombreAsignaturaTest";

  formulario = new FormGroup({
    asignatura: new FormControl('',[Validators.required] ),

  });

pulsado=false;


  enviar(){
this.servicio.setAsignatura=this.formulario.value.asignatura;

 //this.asignatura=this.formulario.value.asignatura;
    var cantidadPreguntas=((localStorage.getItem('PreguntasAsignatura'+this.formulario.value.asignatura))?.split("--"));
    
    if(cantidadPreguntas?.length==0 ||  cantidadPreguntas?.length==null){
    
   // this.noHayPreguntas=true;
    }
    
    if(cantidadPreguntas?.length==1){
    
     // this.listaUnica=(JSON.parse(cantidadPreguntas[0]));
    
    }
    
    if(cantidadPreguntas?.length!>1){
      for(let i=0;i<cantidadPreguntas?.length!;i++){
        // console.log(JSON.parse(cantidadPreguntas![i]));
       
        // this.listaPreguntas[i]=(JSON.parse(cantidadPreguntas![i]));
       this.servicio.AddListaAsignaturas((JSON.parse(cantidadPreguntas![i])));
    
    }
    
    
    }
    
    //this.listaPreguntas= JSON.parse(localStorage.getItem('PreguntasAsignatura'+this.formulario.value.asignatura)!);
    //console.log(this.listaPreguntas)
    //console.log('retrievedObject: ', JSON.parse(retrievedObject));
    this.pulsado=true;

    
      }
    

}
