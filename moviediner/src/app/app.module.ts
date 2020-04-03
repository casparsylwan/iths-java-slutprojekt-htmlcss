import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartsComponent } from './components/parts/parts.component';
import { FrontComponent } from './components/pages/front/front.component';
import { TopnavComponent } from './components/topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    PartsComponent,
    FrontComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
