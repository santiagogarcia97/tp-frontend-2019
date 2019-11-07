import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EstadiosListComponent } from './modules/pages/estadios/estadios-list/estadios-list.component';
import { EstadiosPageComponent } from './modules/pages/estadios/estadios-page/estadios-page.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadiosListComponent,
    EstadiosPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
