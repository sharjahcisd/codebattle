import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { SmartwatchComponent } from './pages/smartwatch/smartwatch/smartwatch.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'smartwatch', component: SmartwatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
