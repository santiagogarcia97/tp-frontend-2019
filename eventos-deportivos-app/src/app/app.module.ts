import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEsAR from '@angular/common/locales/es-AR';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { EstadiosListComponent } from './modules/pages/estadios/estadios-list/estadios-list.component';
import { EstadiosPageComponent } from './modules/pages/estadios/estadios-page/estadios-page.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { PartidosListComponent } from './modules/pages/partidos/partidos-list/partidos-list.component';
import { PartidosPageComponent } from './modules/pages/partidos/partidos-page/partidos-page.component';
import { JugadoresPageComponent } from './modules/pages/jugadores/jugadores-page/jugadores-page.component';
import { JugadoresListComponent } from './modules/pages/jugadores/jugadores-list/jugadores-list.component';
import { EquiposPageComponent } from './modules/pages/equipos/equipos-page/equipos-page.component';

registerLocaleData(localeEsAR, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    EstadiosListComponent,
    EstadiosPageComponent,
    HeaderComponent,
    PartidosListComponent,
    PartidosPageComponent,
    JugadoresPageComponent,
    JugadoresListComponent,
    EquiposPageComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-Ar' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
