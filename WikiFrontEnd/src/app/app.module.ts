import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';

//Declares Routes for components
const appRoutes: Routes = [
  { path: 'components/about-page', component: AboutPageComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
