import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FilterPipe} from './components/landing/filter.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatSidenavModule, MatButtonModule, MatDialogModule, MatTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewEditPageComponent } from './components/view-edit-page/view-edit-page.component';
import { RetrievePageResolve } from './guards/retrieve-page-resolver.service';
import { ViewEditSectionComponent } from './components/view-edit-section/view-edit-section.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';

//Imports Avatar Module
import { AvatarModule } from 'ngx-avatar';
import { TrendingPipe } from './components/landing/trending.pipe';
import { MARKDOWN_SETTINGS } from './markdown.settings';
import { DisplayMarkdownComponent } from './components/display-markdown/display-markdown.component';
import { ChooseImageDialog } from './components/choose-image-dialog/choose-image.dialog';
import { ChooseExistingImageComponent } from './components/choose-image-dialog/choose-existing-image/choose-existing-image.component';
import { UploadImageComponent } from './components/choose-image-dialog/upload-image/upload-image.component';

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
    AboutPageComponent,
    TrendingPipe,
    DisplayMarkdownComponent,
    ChooseImageDialog,
    ChooseExistingImageComponent,
    UploadImageComponent
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
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({markedOptions: {provide: MarkedOptions, useValue: MARKDOWN_SETTINGS}}),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging purposes only
    ),
    AvatarModule
  ],
  providers: [
    RetrievePageResolve
  ],
  entryComponents: [
    ChooseImageDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
