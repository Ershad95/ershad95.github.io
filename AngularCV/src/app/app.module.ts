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
import { ContactComponent } from './contact/contact.component';
import { ContactItemComponent } from './contact/contact-item/contact-item.component';
import { CertificateComponent } from './certificate/certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    GitComponent,
    DownloadCVComponent,
    LinkedinComponent,
    NotFoundComponent,
    ContactComponent,
    ContactItemComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"skillBadge",component:LinkedinComponent},
      {path:"git",component:GitComponent},
      {path:"contact",component:ContactComponent},
      {path:"certificate",component:CertificateComponent},
      {path:"",redirectTo:"/home",pathMatch:"full"},
      {path:"**",component:NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
