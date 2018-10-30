import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ATableComponent } from './components/a-table/a-table.component';
import { ABackendService } from './services/backend/a-backend.service';


@NgModule({
  declarations: [
    AppComponent,
    ATableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ABackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
