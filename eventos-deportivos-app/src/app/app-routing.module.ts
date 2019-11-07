import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadiosPageComponent } from './modules/pages/estadios/estadios-page/estadios-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/estadios', pathMatch: 'full'},
  { path: 'estadios', component: EstadiosPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
