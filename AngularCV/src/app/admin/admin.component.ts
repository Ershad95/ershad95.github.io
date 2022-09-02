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

  ngOnInit(): void { }

  logout() {
    this.loginService.logout();
    this.route.navigate(['/home']); // navigate to admin page
  }
}
