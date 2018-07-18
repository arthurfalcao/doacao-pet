import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isCollapsed = false;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }


}
