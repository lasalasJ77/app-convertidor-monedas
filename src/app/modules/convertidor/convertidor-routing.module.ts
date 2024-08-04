import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertidorComponent } from './pages/convertidor/convertidor.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {path : 'convertidor',component : ConvertidorComponent},
      {path : '**', redirectTo : ''}
    ],
    component : ConvertidorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertidorRoutingModule { }
