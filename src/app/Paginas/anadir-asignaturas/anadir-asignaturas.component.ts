import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-asignaturas',
  templateUrl: './anadir-asignaturas.component.html',
  styleUrls: ['./anadir-asignaturas.component.css']
})
export class AnadirAsignaturasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  formulario = new FormGroup({
    nombre: new FormControl('',[Validators.required] ),

  });

NombreAsignatura="NombreAsignaturaTest"

  enviar(){
console.log(this.formulario.value.nombre);

if(localStorage.getItem(this.NombreAsignatura)==undefined){
  localStorage.setItem(this.NombreAsignatura,this.formulario.value.nombre);

}
else{

  localStorage.setItem(this.NombreAsignatura,localStorage.getItem(this.NombreAsignatura)+"--"+this.formulario.value.nombre);
}


this.formulario.reset();

this.reiniciar();
  }

  reiniciar(){
    //location.reload();
  
  
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/AnadirPreguntas"]); 
  }); 
  
  }
}
