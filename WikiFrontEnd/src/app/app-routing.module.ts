import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing'},
  {path: 'landing', component: LandingComponent},
  {path: 'landing/error', component: LandingComponent},
  {path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
