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
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewEditPageComponent } from './components/view-edit-page/view-edit-page.component';
import { RetrievePageResolve } from './guards/retrieve-page-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FilterPipe,
    ViewEditPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    RetrievePageResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
