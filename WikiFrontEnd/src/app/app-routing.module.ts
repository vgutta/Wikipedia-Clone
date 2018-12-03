import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
<<<<<<< HEAD
import { ViewEditPageComponent } from './components/view-edit-page/view-edit-page.component';
import { RetrievePageResolve } from './guards/retrieve-page-resolver.service';
=======
import { CallbackComponent } from './callback/callback.component';
>>>>>>> security

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing'},
  {path: 'landing', component: LandingComponent},
<<<<<<< HEAD
  {path: 'wiki/:pageName', component: ViewEditPageComponent, resolve: { page: RetrievePageResolve } }
=======
  {path: 'landing/error', component: LandingComponent},
  {path: 'callback', component: CallbackComponent }
>>>>>>> security
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
