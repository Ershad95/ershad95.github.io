import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginServiceService } from '../Service/login-service.service';
import { Router } from '@angular/router'; // import router from angular router


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFaild: boolean = false;
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
    remember: false
  });

  constructor(private formBuilder: FormBuilder,
    private route: Router,
 
    private loginService: LoginServiceService) {

     

     }
  ngOnInit(): void {
    this.rememberUser();
  }

  private rememberUser() {


    if (this.loginService.cookieValidate())
      this.route.navigate(['/admin']); // navigate to admin page

  }
  login() {
    let formData = this.loginForm.value;
    let result = this.loginService.loginToAdminPage(formData.username ?? '', formData.password ?? '');
    if (result) {
      if (formData.remember ?? false) {
        this.loginService.makeCookieLogin(formData.username ?? '');
      }
      this.loginFaild = false;

      this.route.navigate(['/admin']); // navigate to admin page


    } else {
      this.loginFaild = true;
    }

  }

}
