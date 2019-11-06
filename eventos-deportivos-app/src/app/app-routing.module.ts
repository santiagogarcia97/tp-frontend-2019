import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadiosPageComponent } from './modules/pages/estadios/estadios-page/estadios-page.component';
import {EstadioDetailsComponent} from './modules/pages/estadios/estadio-details/estadio-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/estadios', pathMatch: 'full'},
  { path: 'estadios', component: EstadiosPageComponent },
  { path: 'estadios/:id', component: EstadioDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
