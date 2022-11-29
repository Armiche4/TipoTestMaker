import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anadir-preguntas',
  templateUrl: './anadir-preguntas.component.html',
  styleUrls: ['./anadir-preguntas.component.css']
})
export class AnadirPreguntasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    if(localStorage.getItem(this.NombreAsignatura)!=undefined){


      this.listaAsignaturas=localStorage.getItem(this.NombreAsignatura)?.split("--");

    }
    else{

      this.listaAsignaturas.push("Sin asignatura");
    }
    

  }
  NombreAsignatura="NombreAsignaturaTest";

  listaAsignaturas:any;

  formulario = new FormGroup({
    enunciado: new FormControl('',[Validators.required] ),
    respuesta1: new FormControl('', [Validators.required]),
    respuesta2: new FormControl('', Validators.required),
    respuesta3: new FormControl('', Validators.required),
    respuesta4: new FormControl('', Validators.required),
    correcta:new FormControl('', Validators.required),
    asignatura:new FormControl('', Validators.required),
  });

  enviar(){
console.log(this.formulario.value);

if(localStorage.getItem('PreguntasAsignatura'+this.formulario.value.asignatura)==undefined){
  localStorage.setItem('PreguntasAsignatura'+this.formulario.value.asignatura, JSON.stringify(this.formulario.value));

}
else{

  localStorage.setItem('PreguntasAsignatura'+this.formulario.value.asignatura, JSON.stringify(this.formulario.value)+"--"+localStorage.getItem('PreguntasAsignatura'+this.formulario.value.asignatura));
}


this.formulario.reset()
  }
}
