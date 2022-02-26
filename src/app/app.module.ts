import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { SmartwatchModule } from './pages/smartwatch/smartwatch.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    SmartwatchModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
