import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistanceComponent } from './resistance/resistance.component';
import { ResistanceService } from './services/resistance.service'

@NgModule({
  declarations: [
    AppComponent,
    ResistanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ResistanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
