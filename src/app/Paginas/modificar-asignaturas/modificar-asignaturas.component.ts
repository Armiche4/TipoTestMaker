
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-asignaturas',
  templateUrl: './modificar-asignaturas.component.html',
  styleUrls: ['./modificar-asignaturas.component.css']
})
export class ModificarAsignaturasComponent implements OnInit {


  constructor(private router:Router) { }

  NombreAsignatura="NombreAsignaturaTest";
 asignaturaABorrar:string="";

  listaAsignaturas:any;


  ngOnInit(): void {
    if(localStorage.getItem(this.NombreAsignatura)!=undefined){


      this.listaAsignaturas=localStorage.getItem(this.NombreAsignatura)?.split("--");

    }
    else{

      this.listaAsignaturas.push("Sin asignatura");
    }
  }


  guardarCambios(){
    let listaCadenaAsignaturas:string="";
for(let i=0; i<this.listaAsignaturas.length;i++){

  listaCadenaAsignaturas=listaCadenaAsignaturas+(<HTMLInputElement>document.getElementById(this.listaAsignaturas[i])).value+"--"

  if(this.listaAsignaturas[i]!=(<HTMLInputElement>document.getElementById(this.listaAsignaturas[i])).value && localStorage.getItem('PreguntasAsignatura'+this.listaAsignaturas[i])!=undefined){


    let preguntas=localStorage.getItem('PreguntasAsignatura'+this.listaAsignaturas[i]);

    localStorage.setItem('PreguntasAsignatura'+(<HTMLInputElement>document.getElementById(this.listaAsignaturas[i])).value,preguntas!);

    localStorage.removeItem('PreguntasAsignatura'+this.listaAsignaturas[i]);
 

  }


  if( this.asignaturaABorrar!=""){
    localStorage.removeItem('PreguntasAsignatura'+this.asignaturaABorrar);

  }

}

console.log(listaCadenaAsignaturas.substring(0,listaCadenaAsignaturas.length-2));

localStorage.setItem(this.NombreAsignatura,listaCadenaAsignaturas.substring(0,listaCadenaAsignaturas.length-2));

this.reiniciar();

  }



  reiniciar(){
    //location.reload();
  
  
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/ModificarPreguntas"]); 
  }); 
  
  }



  eliminar(index:any){

   
let aBorrar:string="";

    let listaNueva:any[] = [];
    for(let i=0;i<this.listaAsignaturas.length;i++){

if(index==i){
  aBorrar=this.listaAsignaturas[i];


}
else{
listaNueva.push(this.listaAsignaturas[i])
}
    }

   let panel =confirm("estas seguro, se borraran todas las preguntas del tema tambien");


   if(panel==true){

    this.listaAsignaturas=listaNueva;  

    this.asignaturaABorrar=aBorrar;

   }
   else{

   }

console.log(this.listaAsignaturas);

  }

}
