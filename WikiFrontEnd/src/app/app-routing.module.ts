import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ViewEditPageComponent } from './components/view-edit-page/view-edit-page.component';
import { RetrievePageResolve } from './guards/retrieve-page-resolver.service';
import { CallbackComponent } from './callback/callback.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing',},
  {path: 'landing', component: LandingComponent},
  {path: 'wiki/:pageName', component: ViewEditPageComponent, resolve: { page: RetrievePageResolve }, canActivate: [AuthGuard] },
  {path: 'landing/error', component: LandingComponent},
  {path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
