import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hacer-test',
  templateUrl: './hacer-test.component.html',
  styleUrls: ['./hacer-test.component.css']
})
export class HacerTestComponent implements OnInit {

  constructor(private router:Router) { }

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

  tipotest= new FormGroup({
    
  });

  asignatura:any;

  listaPreguntas:any[] = [];

  noHayPreguntas:boolean=false;


  pulsado:boolean=false;

  testAcabado:boolean=false;

  contador:number=0;

  radioButtonHabilitado=null  as any;



  enviar(){

this.asignatura=this.formulario.value.asignatura;
var cantidadPreguntas=((localStorage.getItem('PreguntasAsignatura'+this.formulario.value.asignatura))?.split("--"));

if(cantidadPreguntas?.length==0 ||  cantidadPreguntas?.length==null){

this.noHayPreguntas=true;
}

if(cantidadPreguntas?.length!>0){
  for(let i=0;i<cantidadPreguntas?.length!;i++){
    // console.log(JSON.parse(cantidadPreguntas![i]));
   
     this.listaPreguntas[i]=(JSON.parse(cantidadPreguntas![i]));
   

}


}

//this.listaPreguntas= JSON.parse(localStorage.getItem('PreguntasAsignatura'+this.formulario.value.asignatura)!);
console.log(this.listaPreguntas)
//console.log('retrievedObject: ', JSON.parse(retrievedObject));
this.pulsado=true;
  }



  acabarTest(){

for(let i=0;i<this.listaPreguntas.length;i++){
  if(this.listaPreguntas[i].correcta==this.listaPreguntas[i].respondida){


 this.contador++;
  }

}
this.radioButtonHabilitado=true;
this.testAcabado=true;
  }

  onItemChange(value:any){
    //console.log(" Value is : ", value.value,value.name );

this.listaPreguntas[value.name].respondida=value.value;

//console.log(this.listaPreguntas)

 }


 reiniciar(){
  //location.reload();



  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(["/HacerTest"]); 
}); 

}




}
