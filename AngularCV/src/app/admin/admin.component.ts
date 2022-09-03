import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Service/login-service.service';
import { Router } from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private route: Router,) { }

  ngOnInit(): void {
    if (!this.loginService.isAdminLogin()) {
      alert("Please Login!");
      this.route.navigate(['/login']); // navigate to login page
    }
  }

  logout() {
    this.loginService.logout();
    this.route.navigate(['/home']); // navigate to home page
  }
}
