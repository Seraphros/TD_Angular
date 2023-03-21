import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { LightBulbTDComponent } from './components/light-bulb-td/light-bulb-td.component';
import {LightStateService} from "./services/lightStateService/light-state-service.service";

@NgModule({
  declarations: [
    AppComponent,
    LightBulbTDComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [LightStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
