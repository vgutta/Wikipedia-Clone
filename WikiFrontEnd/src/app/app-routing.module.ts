import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { BrowseComponent} from './components/browse/browse.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing'},
  {path: 'landing', component: LandingComponent},
  {path: 'browse', component: BrowseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
