import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { AparatComponent } from './aparat/aparat.component';
import { LikeComponent } from './like/like.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    CertificateComponent,
    AparatComponent,
    LikeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"skillBadge",component:LinkedinComponent},
      {path:"git",component:GitComponent},
      {path:"contact",component:ContactComponent},
      {path:"certificate",component:CertificateComponent},
      {path:"aparat",component:AparatComponent},
      {path:"",redirectTo:"/home",pathMatch:"full"},
      {path:"**",component:NotFoundComponent}
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
