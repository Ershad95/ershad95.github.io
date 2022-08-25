import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"git",component:GitComponent},
      {path:"",redirectTo:"/home",pathMatch:"full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
