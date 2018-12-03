import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FilterPipe} from './components/landing/filter.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

//Imports Avatar Module
import { AvatarModule } from 'ngx-avatar';
import { ProfileComponent } from './components/profile/profile.component';

//Declares Routes for components
const appRoutes: Routes = [
  { path: 'components/about-page', component: AboutPageComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FilterPipe,
    AboutPageComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //debugging purposes only
    ),
    AvatarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
