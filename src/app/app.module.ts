import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { AnadirPreguntasComponent } from './Paginas/anadir-preguntas/anadir-preguntas.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AnadirAsignaturasComponent } from './Paginas/anadir-asignaturas/anadir-asignaturas.component';
import { HacerTestComponent } from './Paginas/hacer-test/hacer-test.component';
import { HomeComponent } from './Paginas/home/home.component';
import { ModificarPreguntasComponent } from './Paginas/modificar-preguntas/modificar-preguntas.component';
import { DesplegableComponent } from './Componentes/desplegable/desplegable.component';
import { FormsModule } from '@angular/forms';
import { ModificarAsignaturasComponent } from './Paginas/modificar-asignaturas/modificar-asignaturas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnadirPreguntasComponent,
    AnadirAsignaturasComponent,
    HacerTestComponent,
    HomeComponent,
    ModificarPreguntasComponent,
    DesplegableComponent,
    ModificarAsignaturasComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
