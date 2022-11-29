import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-preguntas',
  templateUrl: './modificar-preguntas.component.html',
  styleUrls: ['./modificar-preguntas.component.css']
})
export class ModificarPreguntasComponent implements OnInit {

  constructor(private router:Router) { }

  listaAsignaturas:any;

  NombreAsignatura="NombreAsignaturaTest";

  formulario = new FormGroup({
    asignatura: new FormControl('',[Validators.required] ),

  });

  noHayPreguntas:boolean=false;
  asignatura:any;

  listaPreguntas:any[] = [];

  ngOnInit(): void {
    if(localStorage.getItem(this.NombreAsignatura)!=undefined){


      this.listaAsignaturas=localStorage.getItem(this.NombreAsignatura)?.split("--");

    }
    else{

      this.listaAsignaturas.push("Sin asignatura");
    }
  }

  enviar(){

    this.asignatura=this.formulario.value.asignatura;
    var cantidadPreguntas=((localStorage.getItem('PreguntasAsignatura'+this.formulario.value.asignatura))?.split("--"));
    
    if(cantidadPreguntas?.length==0 ||  cantidadPreguntas?.length==null){
    
    this.noHayPreguntas=true;
    }
    
    if(cantidadPreguntas?.length!>0){
      for(let i=0;i<cantidadPreguntas?.length!;i++){

       
         this.listaPreguntas[i]=(JSON.parse(cantidadPreguntas![i]));
       
    
    }
    
    
    }
    

    console.log(this.listaPreguntas)


      }
      guardarCambios(){

        for(let i=0;i<this.listaPreguntas.length;i++){

if(i==0){

  localStorage.setItem('PreguntasAsignatura'+this.formulario.value.asignatura,JSON.stringify(this.listaPreguntas[i]))
}
else{

  localStorage.setItem('PreguntasAsignatura'+this.formulario.value.asignatura,JSON.stringify(this.listaPreguntas[i])+"--"+localStorage.getItem('PreguntasAsignatura'+this.formulario.value.asignatura))
}
               
        }

    this.reiniciar();
        
      }


      cambiarRespuestaCorrecta(evento:any){


this.listaPreguntas[evento.name].correcta=evento.value;


      }


      reiniciar(){
        //location.reload();
      
      
      
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["/ModificarPreguntas"]); 
      }); 
      
      }

      eliminar(index:any){

        console.log(index);


        let listaNueva:any[] = [];
        for(let i=0;i<this.listaPreguntas.length;i++){

if(index==i){


}
else{
  listaNueva.push(this.listaPreguntas[i])
}
        }

      this.listaPreguntas=listaNueva;  
console.log(this.listaPreguntas);

      }
}
