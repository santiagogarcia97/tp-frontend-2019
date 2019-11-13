import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadiosPageComponent } from './modules/pages/estadios/estadios-page/estadios-page.component';
import {PartidosPageComponent} from './modules/pages/partidos/partidos-page/partidos-page.component';
import {JugadoresPageComponent} from './modules/pages/jugadores/jugadores-page/jugadores-page.component';
import {EquiposPageComponent} from './modules/pages/equipos/equipos-page/equipos-page.component';
import {EquiposDetailComponent} from "./modules/pages/equipos/equipos-detail/equipos-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/partidos', pathMatch: 'full'},
  { path: 'estadios', component: EstadiosPageComponent },
  { path: 'partidos', component: PartidosPageComponent },
  { path: 'partidos/:id', component: EstadiosPageComponent },
  { path: 'jugadores', component: JugadoresPageComponent },
  { path: 'equipos', component: EquiposPageComponent },
  { path: 'equipos/:id', component: EquiposDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
