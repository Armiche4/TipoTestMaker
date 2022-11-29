import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAsignaturasService {

  constructor() { }


  asignatura:any;

  listaAsignaturas:any[] = [];

getAsignatura(){

  return this.asignatura;
}

setAsignatura(asignatura:any){

this.asignatura=asignatura;

}

getListaAsignaturas(){

 return this.listaAsignaturas;
}

AddListaAsignaturas(lista:any){

 this.listaAsignaturas.push(lista);
}

}
