import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerProgressionEntryComponent } from './components/computer-progression-entry/computer-progression-entry.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ComputerProgressionEntryComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
