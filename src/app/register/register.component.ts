import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(public loginService: LoginService) {}

  register() {
    this.loginService.insertUser(this.email, this.password);
  }

  ngOnInit() {}
}
