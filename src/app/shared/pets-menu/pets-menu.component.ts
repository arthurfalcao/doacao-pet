import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-menu',
  templateUrl: './pets-menu.component.html',
  styleUrls: ['./pets-menu.component.css']
})
export class PetsMenuComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
