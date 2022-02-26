import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartwatchComponent } from './smartwatch/smartwatch.component';



@NgModule({
  declarations: [
    SmartwatchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmartwatchComponent
  ]
})
export class SmartwatchModule { }
