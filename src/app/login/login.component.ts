import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(public loginService: LoginService) {}

  ngOnInit() {}

  login() {
    this.loginService.loginEmailandPassword(this.email, this.password);
  }
  
  loginGoogle() {
    this.loginService.loginGoogle();
  }

  loginFacebook() {
    this.loginService.loginFacebook();
  }

  logout() {
    this.loginService.logout();
  }
}
