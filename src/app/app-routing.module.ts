import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnadirPreguntasComponent } from './Paginas/anadir-preguntas/anadir-preguntas.component';
import { AnadirAsignaturasComponent } from './Paginas/anadir-asignaturas/anadir-asignaturas.component';
import { HacerTestComponent } from './Paginas/hacer-test/hacer-test.component';
import { HomeComponent } from './Paginas/home/home.component';
import { ModificarPreguntasComponent } from './Paginas/modificar-preguntas/modificar-preguntas.component';

const routes: Routes = [{ path: 'AnadirPreguntas', component: AnadirPreguntasComponent },

{ path: 'HacerTest', component: HacerTestComponent },
{ path: 'Home', component: HomeComponent },
{ path: 'ModificarPreguntas', component: ModificarPreguntasComponent },
{ path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
