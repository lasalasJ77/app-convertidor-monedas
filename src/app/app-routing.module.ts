import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "convertidor",
    loadChildren : ()=>import('./modules/convertidor/convertidor.module').then((m)=> m.ConvertidorModule)
  },
  { path: '**', redirectTo: 'convertidor' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
