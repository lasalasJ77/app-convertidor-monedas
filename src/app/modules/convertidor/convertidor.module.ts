import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertidorRoutingModule } from './convertidor-routing.module';
import { ConvertidorComponent } from './pages/convertidor/convertidor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConvertidorComponent
  ],
  imports: [
    CommonModule,
    ConvertidorRoutingModule,
    FormsModule
  ]
})
export class ConvertidorModule { }
