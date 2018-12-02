import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FilterPipe} from './components/landing/filter.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatSidenavModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewEditPageComponent } from './components/view-edit-page/view-edit-page.component';
import { RetrievePageResolve } from './guards/retrieve-page-resolver.service';
import { ViewEditSectionComponent } from './components/view-edit-section/view-edit-section.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';

//Imports Avatar Module
import { AvatarModule } from 'ngx-avatar';

//Declares Routes for components
const appRoutes: Routes = [
  { path: 'components/about-page', component: AboutPageComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FilterPipe,
    ViewEditPageComponent,
    ViewEditSectionComponent,
    AboutPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging purposes only
    ),
    AvatarModule
  ],
  providers: [
    RetrievePageResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
