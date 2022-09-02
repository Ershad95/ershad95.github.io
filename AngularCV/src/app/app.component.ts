import { Component } from '@angular/core';
import { LoginServiceService } from './Service/login-service.service';
import { Router } from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  IsAdmin :boolean; 
  constructor(private loginService:LoginServiceService, private route: Router,) {
    this.IsAdmin = loginService.isAdminLogin();
    
  }
  adminPage(){
    this.route.navigate(['/admin']); // navigate to admin page

  }
}
