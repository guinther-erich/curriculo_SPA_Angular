import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorpoComponent } from './corpo/corpo.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Aluno
  {
    path: 'corpo',
    component: CorpoComponent
  },
  //Professor
  {
    path: 'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
