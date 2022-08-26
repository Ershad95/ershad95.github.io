import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GitComponent } from './git/git.component';
import { DownloadCVComponent } from './download-cv/download-cv.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    GitComponent,
    DownloadCVComponent,
    LinkedinComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"skillBadge",component:LinkedinComponent},
      {path:"git",component:GitComponent},
      {path:"",redirectTo:"/home",pathMatch:"full"},
      {path:"**",component:NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
