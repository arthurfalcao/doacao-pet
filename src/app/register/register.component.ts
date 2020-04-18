import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  public phone: string;

  constructor(public loginService: LoginService) {}

  register() {
    this.loginService.insertUser(this.email, this.password);
  }

  ngOnInit() {}
}
